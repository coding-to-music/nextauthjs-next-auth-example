import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
  },
};

export default NextAuth(authOptions);

// import TwitterProvider from "next-auth/providers/twitter";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
// https://next-auth.js.org/configuration/providers/oauth

// FacebookProvider({
//   clientId: process.env.FACEBOOK_ID,
//   clientSecret: process.env.FACEBOOK_SECRET,
// }),
// GoogleProvider({
//   clientId: process.env.GOOGLE_ID,
//   clientSecret: process.env.GOOGLE_SECRET,
// }),
// TwitterProvider({
//   clientId: process.env.TWITTER_ID,
//   clientSecret: process.env.TWITTER_SECRET,
//   version: "2.0",
// }),
