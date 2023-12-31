# nextauthjs-next-auth-example

# 🚀 This is an example application that shows how next-auth is applied to a basic Next.js app. Auth methods include GitHub, Facebook, Twitter, Google, Auth0 🚀

https://github.com/coding-to-music/nextauthjs-next-auth-example

https://nextauthjs-next-auth-example.vercel.app

From / By https://github.com/nextauthjs/next-auth-example

https://next-auth-example.vercel.app/

<!-- <div style="text-align:center;">
  <img src="/images/chakra.jpg" alt="Image" />
  <p><em>Chakra Component Library with Next.js</em></p>
</div> -->

## Node Environment:

```java
nvm use 18
```

## Environment variables:

see `.env.local.example`

```java
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET= # Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/32


AUTH0_ID=
AUTH0_SECRET=
AUTH0_ISSUER=

DESCOPE_ID=
DESCOPE_SECRET=

FACEBOOK_ID=
FACEBOOK_SECRET=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_ID=
GOOGLE_SECRET=

TWITTER_ID=
TWITTER_SECRET=

```

## Routes visited

```java
/
/admin
/api-example
/client
/me
/protected
/server
```

## API Route Example

The examples below show responses from the example API endpoints.

You must be signed in to see responses.

Session

/api/examples/session

```json
{
  "user": {
    "name": "Tom Connors",
    "email": "connors.tom@gmail.com",
    "image": "https://avatars.githubusercontent.com/u/3156358?v=4"
  },
  "expires": "2023-10-20T22:18:35.927Z"
}
```

JSON Web Token

/api/examples/jwt

```json
{
  "name": "Tom Connors",
  "email": "connors.tom@gmail.com",
  "picture": "https://avatars.githubusercontent.com/u/3156358?v=4",
  "sub": "3156358",
  "userRole": "admin",
  "iat": 1695248295,
  "exp": 1697840295,
  "jti": "399f6574-3326-4c57-a755-2757542065a0"
}
```

## Add a favicon.ico

https://isotropic.co/add-a-favicon-to-next-js/

https://realfavicongenerator.net/

### Put the Favicon files into /public

```java
cd public

wget https://realfavicongenerator.net/files/06fedf85d90178d64bdd26e7430b8eca9b181363/favicon_package_v0.16.zip

unzip favicon_package_v0.16.zip

rm *.zip
```

### Create the Favicon component

```java
// /components/Favicon.tsx
import Head from "next/head";

function Favicon(): JSX.Element {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}

export default Favicon;
```

### Include the Favicon in

```java
// /pages/index.tsx

import Layout from "../components/layout";
import Favicon from "../components/Favicon"; // Import the Favicon component

export default function IndexPage() {
  return (
    <Layout>
      <Favicon />
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
      </p>
    </Layout>
  );
}
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/nextauthjs-next-auth-example.git
git push -u origin main
```

<p align="center">
  <a href="https://nextjs-postgres-auth.vercel.app/">
    <img src="/public/logo.png" height="96">
    <h3 align="center">Next.js Prisma PostgreSQL Auth Starter</h3>
  </a>
</p>

> The example repository is maintained from a [monorepo](https://github.com/nextauthjs/next-auth/tree/main/apps/examples/nextjs). Pull Requests should be opened against [`nextauthjs/next-auth`](https://github.com/nextauthjs/next-auth).

<p align="center">
   <br/>
   <a href="https://authjs.dev" target="_blank">
   <img height="64" src="https://authjs.dev/img/logo/logo-sm.png" />
   </a>
   <a href="https://nextjs.org" target="_blank">
   <img height="64" src="https://nextjs.org/static/favicon/android-chrome-192x192.png" />
   </a>
   <h3 align="center"><b>NextAuth.js</b> - Example App</h3>
   <p align="center">
   Open Source. Full Stack. Own Your Data.
   </p>
   <p align="center" style="align: center;">
      <a href="https://npm.im/next-auth">
        <img alt="npm" src="https://img.shields.io/npm/v/next-auth?color=green&label=next-auth&style=flat-square">
      </a>
      <a href="https://bundlephobia.com/result?p=next-auth-example">
        <img src="https://img.shields.io/bundlephobia/minzip/next-auth?label=size&style=flat-square" alt="Bundle Size"/>
      </a>
      <a href="https://www.npmtrends.com/next-auth">
        <img src="https://img.shields.io/npm/dm/next-auth?label=downloads&style=flat-square" alt="Downloads" />
      </a>
      <a href="https://npm.im/next-auth">
        <img src="https://img.shields.io/badge/TypeScript-blue?style=flat-square" alt="TypeScript" />
      </a>
   </p>
</p>

## Overview

NextAuth.js is a complete open-source authentication solution.

This is an example application that shows how `next-auth` is applied to a basic Next.js app.

The deployed version can be found at [`next-auth-example.vercel.app`](https://next-auth-example.vercel.app)

Go to [next-auth.js.org](https://next-auth.js.org) for more information and documentation.

## Getting Started

### 1. Clone the repository and install dependencies

```
git clone https://github.com/nextauthjs/next-auth-example.git
cd next-auth-example
npm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).

#### Database

A database is needed to persist user accounts and to support email sign in. However, you can still use NextAuth.js for authentication without a database by using OAuth for authentication. If you do not specify a database, [JSON Web Tokens](https://jwt.io/introduction) will be enabled by default.

You **can** skip configuring a database and come back to it later if you want.

For more information about setting up a database, please check out the following links:

- Docs: [next-auth.js.org/adapters/overview](https://next-auth.js.org/adapters/overview)

### 3. Configure Authentication Providers

1. Review and update options in `pages/api/auth/[...nextauth].js` as needed.

2. When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.

e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

A list of configured providers and their callback URLs is available from the endpoint `/api/auth/providers`. You can find more information at https://next-auth.js.org/configuration/providers/oauth

3. You can also choose to specify an SMTP server for passwordless sign in via email.

### 4. Start the application

To run your site locally, use:

```
npm run dev
```

To run it in production mode, use:

```
npm run build
npm run start
```

### 5. Preparing for Production

Follow the [Deployment documentation](https://authjs.dev/guides/basics/deployment) or deploy the example instantly using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-auth-example)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/nextauthjs/next-auth-example&project-name=next-auth-example&repository-name=next-auth-example)

## Acknowledgements

<a href="https://vercel.com?utm_source=nextauthjs&utm_campaign=oss">
<img width="170px" src="https://raw.githubusercontent.com/nextauthjs/next-auth/main/docs/static/img/powered-by-vercel.svg" alt="Powered By Vercel" />
</a>
<p align="left">Thanks to Vercel sponsoring this project by allowing it to be deployed for free for the entire Auth.js Team</p>
