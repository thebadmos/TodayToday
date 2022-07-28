import React from "react";
import blueBriefcase from "../assets/images/blueBriefcase.svg";
import greenBriefcase from "../assets/images/greenBriefcase.svg";
import redBriefcase from "../assets/images/redBriefcase.svg";

const NotificationPane = ({ label, status }) => {
  const { message, image } = statusMapping[status] || "";
  return (
    <div className="flex gap-x-4 p-1 items-center">
      <img src={image} alt={status} />
      <div>
        <h4 className="text-xs font-medium">{label}</h4>
        <p className="text-xs text-[#5C6F7F]">{message}</p>
      </div>
    </div>
  );
};

const statusMapping = {
  published: {
    message: "John Doe placed an order",
    image: greenBriefcase
  },
  review: {
    message: "Adam's goods is in transition",
    image: blueBriefcase
  },
  declined: {
    message: "Jane's oder was declined",
    image: redBriefcase
  }
};

// const investorStatusMapping = {
//   assigned: {
//     message: "You have been assigned to",
//     image: greenBriefcase
//   },
//   unassigned: {
//     message: "You have been unassigned from",
//     image: ashBriefcase
//   }
// }

export default NotificationPane;
