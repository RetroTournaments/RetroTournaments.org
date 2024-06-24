#! python3
"""Script to parse super thanks JSON data into useable importable data

To obtain the JSON file:
    1. Turn on the developer tools in FireFox ('Ctrl Shift I')
    1. Visit https://studio.youtube.com/, and select 'comments' from the sidebar
    2. Enable the 'From Super Thanks' Filter
    3. In the Developer tools 'Network' tab:
        Filter for 'get_comments'
        Select the largest one
        Click 'Response' enable 'Raw'
        Copy Paste to something like: 'get_comments.json'

Call this script with that file, that is: 'python parse_superthanks.py get_comments.json'
"""

import sys
import json
from collections import namedtuple

def parse_youtube_superthanks(data):
    """Try to extract the relevant super thanks information."""
    SuperThanks = namedtuple('SuperThanks', ['youtubeHandle', 'commentId', 'amount'])

    results = []

    # This is brittle, but youtube doesn't give me a proper API!
    for comment in data['contents']['itemSectionRenderer']['contents']:
        if 'messageRenderer' in comment:
            continue

        comment = comment['commentThreadRenderer']['comment']['commentRenderer']

        youtubeHandle = comment['authorText']['simpleText']
        commentId = comment['commentId']
        amount = comment['paidCommentChipRenderer']['pdgCommentChipRenderer']['chipText']['simpleText']

        results.append(SuperThanks(youtubeHandle, commentId, amount))
    return results

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python parse_superthanks.py <get_comments.json>")
        sys.exit(1)

    json_path = sys.argv[1]
    with open(json_path, 'r') as f:
        data = json.load(f)
        results = parse_youtube_superthanks(data)

    print(results)

