import React from "react";
import UserNavbar from '../homeDashboard/userNavbar'
import Section from "../../components/UI/section";
import HotDeals from "../../components/UI/hotDeals";
import TrendingAds from "../../components/UI/trendingAds";
import Content from '../homeDashboard/content'
import Status from '../../pages/home/statusUpload/Card'
import Footer from '../../pages/home/footer'
import Subfooter from "../../pages/home/subfooter";


export default function index() {
  return (
    <>
      <UserNavbar/>
    <Content/>
    <Status/>
    <Section/>
    <HotDeals/>
    <TrendingAds/>
    <Subfooter/>
    <Footer/>
    </>
  );
}
