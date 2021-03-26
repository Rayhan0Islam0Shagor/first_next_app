import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rayhan List | Home</title>
        <meta name="keyword" content="rayhan" />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ad vel maxime rerum voluptates rem mollitia consequatur, blanditiis, eum, consequuntur cumque. Autem ad magni aliquam dignissimos aut tempore et ipsa?</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ad vel maxime rerum voluptates rem mollitia consequatur, blanditiis, eum, consequuntur cumque. Autem ad magni aliquam dignissimos aut tempore et ipsa?</p>
        <Link href="/rayhan">
          <a className={styles.btn}>see Rayhan Listing</a>
        </Link>
      </div>
    </>
  )
}
