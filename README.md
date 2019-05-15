# sanity-template-clean

_WORK IN PROGRESS_

_Template starter with a clean studio._

This template repo is used by Sanity.io to easily create deployed and configured projects through a web interface. You can test it out by [creating this project](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-clean).

The template contains a Sanity Studio. It can be deployed on Netlify.

Want to make a template for Sanity and your favourite front-end framework? We’re still maturing [sanity.io/create](https://sanity.io/create) and our APIs, but do tell us about it on [slack.sanity.io](https://slack.sanity.io).

![The clean template](https://github.com/sanity-io/sanity-template-clean/blob/master/assets/frontend.jpg?raw=true)

## Local development

You develop the templates in `/template`, and review your changes in `/build`.

1. **Install dependencies with `npm install` in the root folder.** This will install the template development tool that watches changes in the `/template` folder and output the template to `/build`.

2. **Run `npm run dev` in root folder.** This will build the template files to `/build`. This is how the code will look for those who install the project later.

3. **Run `sanity install` in `/build/studio`** This will install the necessary dependencies for the Studio.

4. **Run `sanity start` in `/build/studio`**. This will start the development server for Sanity Studio.

## Notes

When developing, you may change `projectId` and `dataset` in `dev/template-values-development.json` to connect with a different Sanity project.
