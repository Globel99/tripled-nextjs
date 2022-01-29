/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import Logo from '../components/logo';
import Banner from '../components/banner';
import baseStyle from '../components/base.module.css';
import Card from '../components/card';

import switchTheme from '../utils/switch-theme';

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
          <div className={baseStyle.themeSwitch}>
            <button onClick={switchTheme}>
              <img src="dark_mode.svg" height={20} width={20} alt="" />
            </button>
          </div>
          <div className={baseStyle.logo}>
            <Logo />
          </div>
        </div>

        <div className="main">
          <div className="banner center">
            <Banner />
          </div>

          <Link href="/nyomtatas" passHref>
            <div>
              <Card
                title="3D Nyomtatás"
                imagePath="printer.svg"
                subTopics={[
                  { title: 'Nyomtatás', price: 1000, priceMeasure: 'Ft/óra' },
                  { title: 'Előkészítés', price: 1500, priceMeasure: 'Ft' },
                ]}
              ></Card>
            </div>
          </Link>

          <Link href="/tervezes" passHref>
            <div>
              <Card
                title="3D tervezés"
                imagePath="gear2.svg"
                subTopics={[
                  { title: 'Tervezés', price: 3000, priceMeasure: 'Ft/óra' },
                ]}
              ></Card>
            </div>
          </Link>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
