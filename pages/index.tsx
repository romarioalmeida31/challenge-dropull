import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head children={undefined}> Cabeca </Head>

      <main className={styles.main}>Corpo</main>

      <footer className={styles.footer}>Rodape</footer>
    </div>
  );
}
