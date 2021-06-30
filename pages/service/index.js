import Head from 'next/head'
import Link from 'next/link'

export default function service() {

  return (
    <div >
    <Head>
      <title>บริการของเรา</title>
    </Head>
  <div>
   <h1> <center>Service pages</center></h1>
   <br />
   <center>
   <Link href="/"><a>Home</a></Link> | 
   <Link href="/about"><a>about</a></Link> | 
   <Link href="/service"><a>service</a></Link> | 
   <Link href="/products/P002"><a>products</a></Link> | 
   </center>
  </div>  
    </div>
  )
}