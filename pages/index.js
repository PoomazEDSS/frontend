import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  return (
    <div >
    <Head>
      <title>รักออกแบบเว็บไซต์</title>
    </Head>
  <main>
   <h1> <center>Index pages</center></h1>
   <br />
   <center>
   <Link href="/"><a>Home</a></Link> | 
   <Link href="/about"><a>about</a></Link> | 
   <Link href="/service"><a>service</a></Link> | 
   <Link href="/products/P002"><a>products</a></Link> | 
   </center>
  </main>  
    </div>
  )
}