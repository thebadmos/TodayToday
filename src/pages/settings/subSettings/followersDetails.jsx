import React from "react";
import category1 from "../../../assets/assets/category.jpg";
import category2 from "../../../assets/assets/category2.jpg";
import { Link } from "react-router-dom";
import Footer from "../../home/footer";

export default function FollowersDetails() {
  const summaries = [
    {
      title: "Jessie Wo",
      img: category1,
      description: "How Much is the Last Price for this Phone?",
      timeSeen: "Online",
      follow: "Follow back",
    },
    {
      title: "John Doe",
      img: category2,
      description: "How Much is the Last Price for this Phone?",
      timeSeen: "Offline",
      follow: "Unfollow",
    },
    {
      title: "John Doe",
      img: category1,
      description: "How Much is the Last Price for this Phone?",
      timeSeen: "Online",
      follow: "Unfollow",
    },
 
  ];

  return (
    <>
      <div className="flex flex-col gap-y-2">
        {summaries.map((summary, index) => (
          <div key={index}>
            <div className="flex gap-x-4 p-1 items-center">
              <img src={summary.img} alt={summary.title} className="w-40" />

              <div className="ml-8">
                <h4 className="font-medium text-lg font-semibold text-GREEN-_100">
                  {summary.title}
                </h4>

                <p className="text-lg italic text-black">
                  {summary.timeSeen}
                </p>
              </div>
              <h4
                className=" text-sm bg-BACKGROUND_GREEN text-white
                py-2 px-6 text-sm font-semibold ml-[600px] rounded-md w-48 text-center uppercase"
              >
                {summary.follow}
              </h4>
            </div>
          </div>
        ))}
        <Footer/>
      </div>
      
    </>
  );
}
