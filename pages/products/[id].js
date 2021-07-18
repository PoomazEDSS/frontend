

import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

const products = () => {
    const router = useRouter()
    const pathData = router.query
    return (
        
<div>
    <h1>
    <center> Products ID: {pathData.id}</center>
    </h1><br />
    <center>
   <Link href="/"><a>Home</a></Link> | 
   <Link href="/about"><a>about</a></Link> | 
   <Link href="/service"><a>service</a></Link> | 
   <Link href="/products/P002"><a>products</a></Link> | 
   <Link href="/components"><a>components</a></Link> |
   </center>
</div>

    )
}
export default products