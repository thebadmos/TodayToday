import React from "react";
import category1 from "../../../assets/assets/category.jpg";
import category2 from "../../../assets/assets/category2.jpg";
import { Link } from "react-router-dom";
import Footer from "../../home/footer";

export default function ChatDetails() {
  const summaries = [
    {
      title: "Jessie Wo",
      img: category1,
      description: "How Much is the Last Price for this Phone?",
      chat: 1,
    },
    {
      title: "Adeleye Adelabu",
      img: category2,
      description: "How Much is the Last Price for this Phone?",
      chat: 5,
    },
    {
      title: "John Doe",
      img: category1,
      description: "How Much is the Last Price for this Phone?",
      chat: 2,
    },
    {
      title: "Emmanuel Yusuf",
      img: category1,
      description: "How Much is the Last Price for this Phone?",
      chat: 1,
    },
  ];

  return (
    <>
      {/* <h2 className="font-bold mb-8">Projects Summary</h2> */}
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
                  {summary.description}
                </p>
              </div>
              <h4
                className=" text-sm bg-BACKGROUND_GREEN text-white
                py-2 px-6 text-sm font-semibold ml-96 rounded-md uppercase"
              >
                {summary.chat}
              </h4>
            </div>
          </div>
        ))}
        <Footer/>
      </div>
      
    </>
  );
}
