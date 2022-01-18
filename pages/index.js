import Head from 'next/head'
import Link from 'next/link'
import Logo from '../components/logo'
import Banner from '../components/banner'
import baseStyle from '../components/base.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TripleD</title>
        <meta name="description" content="TripleD - 3D nyomtatás" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='header center'>
          <div className={baseStyle.logo}>
            <Logo/>
          </div>
        </div>

        <div className='main'>
          <div className='banner center'> 
            <Banner/>
          </div>

          <Link href="/nyomtatas" passHref>
            <div className='card center'>
              <img src="/printer.svg" height={90} width={90} alt=''/>
              <p className='title'>FDM nyomtatás</p>

              <div className='content center'>
                <p className='sub-title'>Nyomtatás</p>
                <div>
                  <p>1000</p>
                  <p>Ft/óra</p>
                </div>

                <p className='sub-title'>Előkészítés</p>
                <div>
                  <p>1000</p>
                  <p>Ft/óra</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/tervezes" passHref>
            <div className='card center'>
              <img src="/gear.svg" height={90} width={90} alt=''/>
              <p className='title'>3D tervezés</p>

              <div className='content center'>
                <p className='sub-title'>Tervezés</p>
                <div>
                  <p>3000</p>
                  <p>Ft/óra</p>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
