import React from 'react'
import UserNavbar from "../../homeDashboard/userNavbar";
import ProductDetails from '../../../pages/dashboard/productDetails/productDetails'
import ProductDesc from '../../../pages/dashboard/productDetails/productDesc'
import SubDesc from '../../../pages/dashboard/productDetails/subDesc'
import Footer from "../../home/footer";
// import Footer from '../../../pages/dashboard/dashboard/DashboardFooter'


function index() {
  return (
    <>
    <UserNavbar />
     <ProductDetails/>
     <ProductDesc/>
      <SubDesc/>
      <Footer/>
    </>
  )
}

export default index