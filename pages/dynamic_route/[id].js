
import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

const dynamicroute = () => {
 const router = useRouter()
 const pathData = router.query
 return (
 <h1 style={{ color: "blueviolet", textAlign: "center" }}>
 name: {pathData.id}<br/>
 type: {pathData.code}
 </h1>
 )
}
export default dynamicroute