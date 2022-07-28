import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const ContentContainer = styled.div`
  ${tw`flex px-20 mt-2`}
`;
function reportAd() {
  return (
    <>
    <ContentContainer>
      <div class="mt-8 w-full max-w-xl uppercase ml-16 ">
          <div class="mb-4">
            <label
              class="block text-GREEN-_100 text-sm font-bold mb-2"
              for="username"
            >
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block  text-GREEN-_100 text-sm font-bold mb-2"
              for="email"
            >
              Email Address
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full 
              py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div class="mb-4">
            <label
              class="block  text-GREEN-_100 text-sm font-bold mb-2"
              for="report"
            >
              Report Title
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 
              leading-tight focus:outline-none focus:shadow-outline"
              id="report"
              type="text"
              placeholder="Give your report a title"
            />
          </div>
          <div class="mb-4">
            <label
              class="block  text-GREEN-_100 text-sm font-bold mb-2
              "
              for="bodyreport"
            >
              Body Of Report
            </label>
            <textarea
      class="
        
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
   
        border border-solid border-gray-300
        rounded
        focus:outline-none focus:shadow-outline
      "
      id="bodyReport"
      rows="5"
      placeholder="Enter your comment here"
    ></textarea>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-BACKGROUND_GREEN hover:bg-BACKGROUND_GREEN uppercase text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit Report
            </button>
          
          </div>
        </div>
        
        </ContentContainer>
    </>
  );
}

export default reportAd;
