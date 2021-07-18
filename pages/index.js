import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
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
   <Link href="/products/P002"><a>products</a></Link> | </center>
   <br />
   <center>
   <Button variant="outlined" color="primary">
    Hello 
   </Button>
   <br/><br/>
   <Box component="span" m={1}>
   <Button variant="contained" color="primary">
  BOX
  </Button>
</Box>
<br/><br/>
<ButtonGroup color="primary" aria-label="outlined primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
   </center>
   <center><br/><br/><br/>
  
   </center>
  </main>  
    </div>
  )
}






