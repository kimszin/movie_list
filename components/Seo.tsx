import React from 'react'
import Head from 'next/head'

function Seo({title}: any) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  )
}

export default Seo