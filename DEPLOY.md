# Initial setup
Initial setup involved AWS accounts, domain registration (route 53), etc. 

Then followed the setup instructions [here.](https://github.com/aws-samples/amazon-cloudfront-secure-static-site)
Note that at the time git head was broken so I had to checkout an earlier commit which didn't use some cloud access feature.

```
git clone https://github.com/aws-samples/amazon-cloudfront-secure-static-site.git
cd amazon-cloudfront-secure-static-site

make package-static

aws s3 mb s3://retrotournaments-org-secure-static-site

aws --region us-east-1 cloudformation package \         
    --template-file templates/main.yaml \
    --s3-bucket retrotournaments-org-secure-static-site \
    --output-template-file packaged.template

aws --region us-east-1 cloudformation deploy \
    --stack-name retrotournament-org-secure-static-site-stack   \
    --template-file packaged.template \
    --capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND \
    --parameter-overrides DomainName=retrotournaments.org SubDomain=www HostedZoneId=Z03971461HMEUIVINGEDV CreateApex=yes
```

Additionally it was necessary to remove the 'Content Security Policy' (because the google font was not working)

And also set up a 'CloudFront Function' to rewrite the uris as expected. I followed this guide:

https://aws.amazon.com/blogs/networking-and-content-delivery/implementing-default-directory-indexes-in-amazon-s3-backed-amazon-cloudfront-origins-using-cloudfront-functions/

# Deploy snippets
Then to deploy the website the public folder is uploaded to the relevant s3 bucket. 
If the changes are meant be visible immediately then they can be invalidated in cloudfront.

```
    aws s3 sync public/ s3://retrotournament-org-secure-static-si-s3bucketroot-13lyfzan5qqe/

    aws cloudfront create-invalidation --distribution-id E18KRTTIJ0K2XW --paths "/*"
```
