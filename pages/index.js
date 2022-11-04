import Head from 'next/head'
import { useEffect } from 'react'
import Layout, { siteTitle } from '../components/form'
import utilStyles from '../styles/utils.module.css'
import Form from '../components/form'


export default function Home() {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Form />
      </section>
    </Layout>
  )
}