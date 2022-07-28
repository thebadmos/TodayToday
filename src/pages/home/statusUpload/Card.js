import React, { Component } from "react";
import StatusUpload from "../../../components/UI/statusUpload";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const dataTop = [
  {url:"/assets/house.png",link: "/status-page"},
  {url:"/assets/redcar.png"},
  {url:"/assets/blueIphone.png"},
  {url:"/assets/laptop-wooden-table.png"},
  {url:"/assets/blueIphone.png"},
  {url:"/assets/house.png"},
  {url:"/assets/laptop-wooden-table.png"},
  {url:"/assets/house.png"},
  {url:"/assets/redcar.png"},
  
]  

export default class App extends Component {
  render() {
    return (
      <>
      <StatusUpload title="Trending Trips" data={dataTop}/>
     

      </>
    )
  }
}
