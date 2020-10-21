# Cloudfront 503/404 Error

I currently have one set of pages that are statically generated at build, but have dynamic paths. I also have another set of dynamic paths that are rendered on the server side.

The issue occurs when I refresh the page of one of the server-rendered dynamic pages. Results in a 503 (or now a 404 with the latest version). Locally, this repo runs fine.

On the static pages, I have set the static paths to have no fallback, though if I set fallback to true, it will load the static page template, instead of the ssr page template that I expect to get.

In previous version of serverless-nextjs (~1.15.0) I didn't have any problems.

Demo https://d2jucf2wqkn40w.cloudfront.net/
