import Layout from "../components/Layout";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="py-0 px-2">
      <Layout title="home">
        <h1>Hello Nextjs</h1>
      </Layout>
    </div>
  );
};

export default Home;
