import React from 'react'
import Table from './table'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home({ list }) {


  return (
    <div className={styles.container} style={{ background: "#323232" }}>
      <Head>
        <title>&#x1F4B8;</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      {/* <div className={styles.topCont}>

      </div> */}

      <div className={styles.midCont}>

      </div>

      <Table list={list}/>

    </div>
  )


}

export async function getStaticProps() {
  try {
    const res = await fetch(`http://localhost:3001/list`)
    const data = await res.json()

    return {
      props: {
        list: data
      }, // will be passed to the page component as props
    }
  }
  catch (error) {
    return {
      props: {
        list: false
      }
    }
  }
}
