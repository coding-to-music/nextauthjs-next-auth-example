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
