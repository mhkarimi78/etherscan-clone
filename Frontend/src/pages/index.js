import Header from "@/components/Header";
import Head from "next/head";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Etherscan Search</title>
        <meta></meta>
      </Head>
      <section className={styles.main}>
        <Header />
      </section>
    </>
  );
}
