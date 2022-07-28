import React from "react";
import Text from "../../../components/Typography/Typography";
import Recentproducts from "./RecentProducts";

export default function LandingPage() {
  const data = new Array(6).fill({
    goodsName: "Children Clothes",
    orderedBy: "John Doe",
    totalPrice: "₦40,00",
    location: "Ibeju-Lekki, Lagos",
    dateCreated: "March 30, 2022",
    lastUpdated: "March 30, 2022"
  });

  return (
    <div className="w-full">
      <div className="flex justify-between">
      <Text variant="h2" format="text-BLACK-_100 font-bold">
        Iphones
      </Text>
      <h4 className="text-xs leading-5 font-medium bg-BACKGROUND_GRAY text-GREEN-_100  py-2 px-5 rounded">
      Featured
      </h4>
      {/* <Text variant="h2" format="text-BLACK-_100 font-bold">
        Featured
      </Text> */}
      </div>
      {/* <Text format="text-BLACK-_300 " variant="small">
        Manage oders, prices, users and transactions
      </Text> */}
      <div className="flex gap-x-4 my-4">
        <div className="w-full bg-white rounded-2xl">
          <Recentproducts />
        </div>
        {/* <div className="w-8/12 bg-white rounded-2xl">
          <GoodSummary />
        </div> */}
      </div>
    </div>
  );
}
