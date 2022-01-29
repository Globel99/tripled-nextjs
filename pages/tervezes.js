import Head from "next/head";
import Logo from "../components/logo";
import Banner from "../components/banner";
import baseStyle from "../components/base.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TripleD</title>
        <meta name="description" content="TripleD - 3D nyomtatás" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="header center">
          <div className={baseStyle.logo}>
            <Logo />
          </div>
        </div>

        <div className="main">asd</div>
      </main>

      <footer></footer>
    </div>
  );
}
