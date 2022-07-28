import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  handleToggleTrue,
  handleToggleFalse,
} from "../../../redux/actions/dashboard/dashboardActions";
import { motion } from "framer-motion";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function InAppLayout() {
  const { toggleReducer } = useSelector((state) => state);

  return (
    // <div className="grid grid-cols-16 grid-rows-10 h-screen">
    //   <div
    //     className={`${
    //       toggleReducer?.isSideBarOpen?.payload
    //         ? "lg:col-span-3"
    //         : "lg:col-span-1"
    //     } row-span-10 bg-BACKGROUND_WHITE overflow-y-auto min-h-full overflow-hidden hidden lg:block `}
    //   >
    //     <Sidebar />
    //   </div>
    //   <div
    //     className={`${
    //       toggleReducer?.isSideBarOpen?.payload
    //         ? "lg:col-start-4"
    //         : "lg:col-start-2"
    //     } flex flex-col col-start-1 col-span-full w-full`}
    //   >
    //     <div className="bg-BACKGROUND_WHITE p-6 w-full fixed top-0 z-50 h-16">
    //       <Header
    //         handleToggleTrue={handleToggleTrue}
    //         handleToggleFalse={handleToggleFalse}
    //         isSideBarOpen={toggleReducer?.isSideBarOpen}
    //       />
    //     </div>
    //     <motion.div
    //       initial={{ opacity: 0, y: 40 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ ease: "easeIn", duration: 0.8 }}
    //       className="bg-BACKGROUND_GRAY md:p-8 p-3 mt-16"
    //     >
    //       <Outlet />
    //     </motion.div>
    //   </div>
    // </div>

    <div className="flex h-screen font-poppins">
      <div
        className={`bg-BACKGROUND_WHITE overflow-y-auto min-h-full w-[250px] overflow-hidden hidden lg:block`}
      >
        <Sidebar />
      </div>
      <div className={`flex flex-col lg:w-[calc(100%-66px)] w-full`}>
        <div className="bg-BACKGROUND_WHITE px-13 py-2 flex items-center w-[calc(100%-66px)] fixed top-0 right-0 z-50 h-[64px]">
          <Header />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", duration: 0.8 }}
          className="p-6 mt-16 bg-[#F3F3F7] h-[calc(100%-64px)] overflow-y-auto"
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
}
