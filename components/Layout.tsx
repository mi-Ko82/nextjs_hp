import { ReactNode } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Footer from "./Organisms/Footer";
import Header from "./Organisms/Header";

type Props = {
  children: ReactNode;
  title: string;
};

const Layout: NextPage<Props> = (props) => {
  const { children, title = "HP by Nextjs" } = props;
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-500 text-sm font-monos">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
