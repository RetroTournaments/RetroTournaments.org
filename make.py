#!python3
# this is terrible I know. Just give me a bit.

import os, shutil, pathlib
import markdown, re
from pathlib import Path
from datetime import datetime


################################################################################
SRC_DIR = "src/"
NEWS_PATH = "src/news/"
PUBLIC_DIR = "public/"
BASE_PATH = "src/base.htmlx"

def normalize_src_path(path):
    assert(path.startswith("src"))
    path = path[3:]
    if len(path) == 0:
        return "/";
    return path + "/"

def add_divs(classes, content):
    head = ""
    tail = ""
    for cls in classes:
        head += f"<div class=\"{cls}\">"
        tail += "</div>"

    return head + "\n" + content + "\n" + tail
        

def clear_replacements(html):
    return re.sub(r'%%-.+-%%', '', html)

def write_html(outpath, html):
    fl = Path(outpath)
    fl.parent.mkdir(parents=True, exist_ok=True)
    fl.write_text(html)

def base_with_replacements(replacements):
    # todo read only once?
    base = open(BASE_PATH, "r").read()

    for key, val in replacements.items():
        base = base.replace("%%-" + key + "-%%", val)

    base = clear_replacements(base)
    return base

# a bare index.md without any special stuff is compiled essentially straight across
# Yes I am aware this is very inefficient.
def compile_index_md(wwwpath, inpath, outpath):
    print("compile_index_md", wwwpath, inpath, outpath)


    htmltitle = wwwpath.replace("/", '').title()
    if htmltitle in ["Faq", "Argos", "Crga", "Sta"]:
        htmltitle = htmltitle.upper()

    content_md = open(inpath, "r").read()
    content_html = markdown.markdown(content_md, extensions=['extra'])
    content_html = add_divs(["m-container m-container-inflatable", "m-row", "m-col-l-10 m-push-l-1"], content_html)

    current = wwwpath.replace("/", '').upper()  

    replacements = {}
    replacements["HTML_TITLE"] = htmltitle
    replacements["CONTENT"] = content_html
    replacements["IFCURRENT_" + current] = "id=m-navbar-current"

    write_html(outpath, base_with_replacements(replacements))

def read_mdx(inpath):
    contents = {}
    content = open(inpath, "r").read()
    vs = content.split("<!-- ")
    for v in vs:
        if len(v) == 0:
            continue
        name, content = v.split(" -->")
        contents[name] = markdown.markdown(content, extensions=['extra'])
    return contents

def compile_landing(inpath, outpath):
    base = open(BASE_PATH, "r").read()
    contents = read_mdx(inpath)

    flavor = add_divs(["m-col-l-6 m-push-l-1 m-col-m-7 m-nopadt"], contents["flavor-text"])
    flavor += add_divs(["m-col-l-3 m-push-l-2 m-col-m-4 m-push-m-1 m-col-s-6 m-push-s-3 m-col-t-8 m-push-t-2",
                        "m-fullwidth m-button m-primary"], contents["flavor-button"][3:-4])
    flavor = add_divs(["m-container", "m-row"], flavor)

    notes = ""
    for loc, color in zip(["left", "mid", "right"], ["m-success", "m-warning", "m-info"]):
        v = contents[f"note-{loc}-title"] + add_divs(["m-pad-bottom", "m-text-center"], contents[f"note-{loc}-text"]) + add_divs([f"m-fullwidth m-button {color}"], contents[f"note-{loc}-button"][3:-4])
        v = f"<aside class=\"m-block {color}\"> {v} </aside>"
        v = add_divs([f"m-col-m-4"], v)
        notes += v

    #<div class="m-col-l-10 m-push-l-1">
    landing_image = """<div class="m-row">
    <div class="m-col-l-12 m-push-l-0">
    <p><img alt="support" class="m-image" src="/coverimage.png" /></p>
    </div>
</div>"""
    notes += landing_image


    notes = add_divs(["m-container m-container-inflatable", "m-row", "m-col-l-10 m-push-l-1", "m-row m-container-inflate"], notes)

    replacements = {}
    replacements["HTML_TITLE"] = "Retro Tournaments"
    replacements["CONTENT"] = flavor + notes

    write_html(outpath, base_with_replacements(replacements))

def convert_news_md(path, lpath):
    md = markdown.Markdown(extensions = ['extra', 'meta'])
    html = md.convert(open(path).read())

    date = md.Meta["date"][0]
    dt = datetime.strptime(date, '%Y-%m-%d')
    fdate = dt.strftime('%B %d, %Y')
    month = dt.strftime('%b')
    day = dt.strftime('%d')
    year = dt.strftime('%Y')
    title = md.Meta["title"][0]


    html = f'<header><h1><a href="{lpath}" rel="bookmark" title="Permalink"><time class="m-date">{month} <span class="m-date-day">{day}</span> {year} </time> {md.Meta["title"][0]} </a></h1></header>{html}<footer> Posted by {md.Meta["author"][0]} on {fdate}.</footer>'
    return html, title, date

def compile_main_news(articles, outpath):
    html = ""
    first = True
    for article in sorted(articles, reverse=True):
        if not first:
            html += "<hr>\n"
        first = False
        date, title, thtml = article
        #html += f'<aside class="m-block m-default"><article>{thtml}</article></aside>\n'
        html += f'<article>{thtml}</article>\n'
        #html += f"<p> {date} </p>"

    html = add_divs(["m-container m-container-inflatable", "m-row"], html)

    replacements = {}
    replacements["HTML_TITLE"] = "News"
    replacements["CONTENT"] = html

    write_html(outpath, base_with_replacements(replacements))


def compile_news(wwwpath, inpath, outpath):
    news_path = Path(NEWS_PATH)

    articles = []
    for f in news_path.glob("*.md"):
        pubpath = os.path.join(PUBLIC_DIR, wwwpath, f.stem + ".html")
        toutpath = PUBLIC_DIR + pubpath[1:]

        html, title, date = convert_news_md(f, pubpath)
        html = f"<article>{html}</article>"
        html = add_divs(["m-container m-container-inflatable", "m-row", "m-col-l-10 m-push-l-1"], html)

        replacements = {}
        replacements["HTML_TITLE"] = title
        replacements["CONTENT"] = html

        print("compile_news", toutpath)
        write_html(toutpath, base_with_replacements(replacements))

        articles.append((date, title, html))

    compile_main_news(articles, outpath)



def compile_mdx(wwwpath, inpath, outpath):
    print("compile_mdx", wwwpath, inpath, outpath)
    if wwwpath == "/":
        compile_landing(inpath, outpath)
    elif wwwpath == "/news/":
        compile_news(wwwpath, inpath, outpath)
    else:
        print("ERROR unknown!", wwwpath)

def main():
    pathlib.Path(PUBLIC_DIR).mkdir(parents=True, exist_ok=True)

    for path, _, files in os.walk("src"):
        wwwpath = normalize_src_path(path)

        for fl in files:
            srcpath = os.path.join(path, fl)
            pubpath = os.path.join(PUBLIC_DIR + wwwpath[1:], fl)

            if fl == "index.md":
                pubpath = pubpath[:-2] + "html"
                compile_index_md(wwwpath, srcpath, pubpath)
            elif fl.endswith("x") or fl.endswith("md"):
                if fl.endswith("mdx"):
                    pubpath = pubpath[:-3] + "html"
                    compile_mdx(wwwpath, srcpath, pubpath)
            else:
                print("copy", wwwpath, srcpath, pubpath)
                os.makedirs(os.path.dirname(pubpath), exist_ok=True)
                shutil.copy(srcpath, pubpath)



if __name__ == "__main__":
    main()
