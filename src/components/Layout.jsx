import React, { Suspense } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Banner from './Banner'
import TopBar from './Topbar'

const Layout = () => {
  return (
    <div className=" relative w-full overflow-x-hidden">
      {/* <TopBar/> */}
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
            <Outlet />

      </Suspense>
      <Banner/>
      <Footer />
    </div>
  )
}

export default Layout