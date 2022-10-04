# JS Frameworks Course Assignment

## Brief

Create either a new React or Next.js app in this repo.

For the login functionality, use either a Wordpress installation with the <a href="https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/" target="_blank">JWT plugin from Module 3</a> installed, or a Strapi installation. Do not add either of these to your repo. Your API should remain a separate project. The markers will use their own installations when marking.

You can use either a REST or GraphQL API for the API calls.

---

## Assessment

Please provide your login credentials for assessment.

Example
- username: xxxxxx
- password: xxxxxx

## Level 1

Your app should have the following paths:

-   "/"
-   "/detail/:param"
-   "/contact"
-   "/login"
-   "/admin"

The admin path won't appear in your navigation.

Use reusable components where appropriate and pay attention to how the components are arranged.

### Home

Find an API that returns at least:

-   an array of items
-   a single item retrieved by a parameter (id, name, slug, etc)

If you are using Next you can also hard-code json and return it from API routes created in `pages/api/*`.

You can use your own Wordpress or Strapi or any other API that you have created for these calls but it must be publically hosted - it must not be running on your localhost.

Display at least 2 properties from each result.

Each result should link to the detail page, passing a parameter in the URL.

### Detail

Retrieve the parameter from the URL and use it in an API call to fetch one item.

Display at least 3 properties from the item.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

