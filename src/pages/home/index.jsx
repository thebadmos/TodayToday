import React from "react";
import Navbar from '../../pages/home/Navbar/index'
import Content from '../../pages/home/Navbar/content'
import Footer from '../../pages/home/footer'
import Subfooter from "./subfooter";


export default function index() {
  return (
    <>
      <Navbar/>
    <Content/>
    <Subfooter/>
    <Footer/>
    </>
  );
}
