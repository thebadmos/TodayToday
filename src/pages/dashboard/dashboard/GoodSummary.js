import React from "react";
import blueBriefcase from "../../../assets/images/blueBriefcase.svg";
import greenBriefcase from "../../../assets/images/greenBriefcase.svg";
import redBriefcase from "../../../assets/images/redBriefcase.svg";

export default function GoodSummary() {
  const summaries = [
    {
      title: "Goods",
      color: "bg-[#C6E5FF]",
      img: blueBriefcase,
      text: 5123
    },
    {
      title: "Goods Delivered",
      color: "bg-[#E2FEF0]",
      img: greenBriefcase,
      text: 2000
    },
    {
      title: "Pending Delivery",
      color: "bg-[#C6E5FF]",
      img: blueBriefcase,
      text: 3123
    },
    {
      title: "Order Declined",
      color: "bg-[#C4D6ED]",
      img: redBriefcase,
      text: 1000
    }
  ];

  return (
    <div className="w-full px-6 py-8">
      <h2 className="font-bold mb-8">Projects Summary</h2>
      <div className="flex justify-between gap-x-5">
        {summaries.map((summary, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-3 items-center justify-center w-[20%] min-w-32 h-40 rounded-xl shadow-projects bg-white"
          >
            {/* <div className={`rounded-full p-3 ${summary.color}`}> */}
            <img src={summary.img} alt={summary.title} />
            {/* </div> */}
            <p className="text-xs">{summary.title}</p>
            <p className="text-xs font-medium">{summary.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
