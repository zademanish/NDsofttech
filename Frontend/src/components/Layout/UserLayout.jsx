import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from '../Common/Header'
import Footer from '../Common/Footer'



const UserLayout = () => {
  return (
   <div>
    <Header/>
   {/* main content */}
   <main>
        <Outlet/>
   </main>
   {/* Footer */}
   <Footer/>
   </div>

  )
}

export default UserLayout