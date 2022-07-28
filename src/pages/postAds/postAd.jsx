import React,{useState} from "react";
import UserNavbar from "../homeDashboard/userNavbar";
import Footer from "../home/footer";
import tw from "twin.macro";
import styled from "styled-components";
import FileUpload from "./uploadFile";
import PlanAd from "./planAd";
import "./Modal.css";

const ContentContainer = styled.div`
  ${tw`flex px-24 mt-28`}
`;
const TextContainer = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full`}
`;
const Title = styled.h2`
  ${tw`font-semibold text-2xl text-GREEN-_100`}
`;
const SubTitle = styled.div`
  ${tw`text-base font-semibold`}
`;
 
const CategoryOptions = [
  {
    label: "Select Category",
    value: "select",
  },
  {
    label: "Electronics",
    value: "Electronics",
  },
  {
    label: "Vehicles",
    value: "Vehicles",
  },
  {
    label: "Gadgets",
    value: "Gadgets",
  },
  {
    label: "Real Estate",
    value: "Real Estate",
  },
  {
    label: "Fashion",
    value: "Fashion",
  },
  {
    label: "Jobs",
    value: "Jobs",
  },
  {
    label: "Agriculture",
    value: "Agriculture",
  },
  {
    label: "Pets",
    value: "Pets",
  },
  {
    label: "Babies",
    value: "Babies",
  },
  {
    label: "Sports",
    value: "Sports",
  },
  {
    label: "Beauty",
    value: "Beauty",
  },
  {
    label: "Services",
    value: "Services",
  },
];

const Location = [
  {
    label: "Select Location",
    value: "select",
  },
  {
    label: "Lagos",
    value: "Lagos",
  },
  {
    label: "Oyo",
    value: "Oyo",
  },
  {
    label: "Ogun",
    value: "Ogun",
  },
];
const PostAd = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <UserNavbar />
      <ContentContainer>
        <Title>Post Ad</Title>
      </ContentContainer>
      <hr className="mt-2" style={{ color: "#E5E5E5" }} />
      <div className="px-24">
        <div
          className="bg-BACKGROUND_GREEN text-white 
              text-base ml-4 py-2 px-6 rounded w-32 mt-4 text-center"
        >
          About Ad
        </div>

        <SubTitle className="mt-6">Please Fill in Details Below</SubTitle>
        <select
          className="w-[500px] border bg-white rounded
         px-3 py-2 outline-none mt-2 font-semibold text-base"
        >
          {CategoryOptions.map((CategoryOptions) => (
            <option value={CategoryOptions.value}>
              {CategoryOptions.label}
            </option>
          ))}
        </select>
      </div>
      <div className="px-24 mt-4">
        <select
          className="w-[500px] border bg-white rounded
         px-3 py-2 outline-none mt-2 text-base font-semibold "
        >
          {Location.map((loc) => (
            <option value={loc.value}>{loc.label}</option>
          ))}
        </select>

        <SubTitle className="mt-6">Upload Images</SubTitle>
        <p className="text-base">
          First picture - is the title picture. You can change the order of
          photos: just grab your photos and drag
        </p>

        <FileUpload />
        {/* FORMS */}
        <input
          type="text"
          placeholder="Title"
          className="w-[700px] mt-2 px-3 py-2 border-solid border-2 border-sky bg-white 
        text-basw font-semibold text-black focus:outline-none"
        />
        <div>
          <select
            className="w-[300px] border-solid border-2 border-sky bg-white rounded-lg
         px-3 py-2 outline-none mt-2 text-sm font-semibold "
          >
            {Location.map((loc) => (
              <option value={loc.value}>{loc.label}</option>
            ))}
          </select>
          <select
            className="w-[300px] border-solid border-2 border-sky bg-white rounded-lg
         px-3 py-2 outline-none mt-2 text-sm font-semibold ml-6"
          >
            {Location.map((loc) => (
              <option value={loc.value}>{loc.label}</option>
            ))}
          </select>
        </div>
        <textarea
          class="w-[700px] px-3 mt-2 py-2 text-black border border-black rounded-lg focus:outline-none"
          rows="8"
          placeholder="Description"
        ></textarea>

        <input
          type="text"
          placeholder="Price (In Naira)"
          className="w-[700px] border rounded-lg border-solid border-2 border-sky bg-white
         px-3 py-2 outline-none mt-2 text-base text-black"
        />
        <div class="flex items-center">
          <input
            type="checkbox"
            id="checkbox"
            class="h-6 w-6 text-gray-700 border rounded mr-2"
          />
          <label for="checkbox-large-example">Negotiable</label>
        </div>

        <h2 className="text-sm font-semibold mt-3">Please Select A Plan</h2>
        <PlanAd/>
        <div className="flex justify-end">
        <div onClick={toggleModal} className="bg-BACKGROUND_GREEN text-white font-semibold text-base py-2 px-8 rounded">
          Post Ad</div>
        {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlayModal"></div>
          <div className="modal-content">
            <h2 className="text-GREEN-_100 text-2xl">
           Ad Posted Successfully
            </h2>
            <button className="close-modal text-GREEN-_100" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PostAd;
