import React from "react";
import NotificationPane from "../../../components/NotificationPane";

export default function RecentActivity() {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });

  const date = month + " " + today.getDate();
  return (
    <div className="p-6">
      <h2 className="font-bold text-base mb-4">Recent Activity</h2>
      <div className="flex flex-col gap-y-2">
        <NotificationPane label={date} status="published" />
        <NotificationPane label="In-Review" status="review" />
        <NotificationPane label="Declined " status="declined" />
      </div>
    </div>
  );
}
