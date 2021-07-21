import React from 'react'
import AdminHeader from './components/layouts/admin.header'
import AdminContent from './components/layouts/admin.content'
import AdminFooter from './components/layouts/admin.footer'
import AdminSidebar from './components/layouts/admin.sidebar'

const Home = () => {
    return (
        <div>
            <AdminHeader/>                   
            <AdminContent/>
            <AdminSidebar/>
            <AdminFooter/>
            
        </div>
    )
}

export default Home