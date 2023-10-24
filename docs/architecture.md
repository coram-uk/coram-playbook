# Architecture 

![software architecture diagram described in other sections](images/architecture_diagram.png)

## Code Parts

- **Eleventy**: A JavaScript and Markdown based platform that generates static websites.
- **Static CMS**: A content management systems that can read, write, and publish changes to a GitHub repository. It does not require an application server, but runs as a single page application hosted at the `/admin` endpoint. It uses GitHub as an authentication and authorization mechanism.

## Infrastructure 

- **GitHub**: Store the application's code and is used to authenticate/authorize contributors.
- **Netlify**: Hosts the application, including drafts and production deployments. Has a single user (but could have more if configured) that is linked to a GitHub account for access to the repository.

## Publish Workflow

1. User goes to `<url>/admin` to access CMS
1. User authenticates with their GitHub user account, which also checks the repository for read/write authorization
1. User add, deletes, or modifies a piece of content
1. Static CMS saves the draft in a GitHub branch
1. Netlify sees the draft and deploys it
1. User can preview the draft at a draft URL
1. User publishes the content
1. Static CMS saves the published content in the main branch
1. Netlify sees the published content and deploys it to the hosting behind `<url>`