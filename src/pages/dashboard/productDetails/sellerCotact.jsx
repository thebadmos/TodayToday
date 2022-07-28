import React,{useState} from 'react'
import "../../../styles/productDetails.css";
import { faMapMarkerAlt, faClock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userProfile from "../../../assets/assets/userprofile.png";
import "../../postAds/Modal.css";


const details = [
    {
        name: " Adekunle adejare",
        location: "Lagos, Nigeria",
        timeSeen: "3 Hours Ago",
        phoneNumber: "08098702835"
    },
  ];


const SellerContact = () => {
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
   <div>
    {details.map((item) => (
            <div key={item._id}>
                  <div className="">
              
                <div className="text-base tracking-wide uppercase mt-4 font-semibold">
                  seller details
                </div>
                <div class="flex items-center">
                  <img
                    class="w-10 h-10 rounded-full mr-4"
                    src={userProfile}
                    alt="Avatar"
                  />
                  <div class="text-sm">
                    <p class="text-sm tracking-wide uppercase font-semibold text-GREEN-_100">
                    {item.name}
                      <br />
                      <span className="text-black">
                        {" "}
                        Last Seen: {item.timeSeen}
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  className=" text-sm bg-BACKGROUND_GREEN text-white
                 py-2 px-6 rounded uppercase"
                 onClick={toggleModal}
                >
                  contact seller
                </button>
                <button
                  className="text-sm bg-BACKGROUND_GRAY text-GREEN-_100
                 py-2 px-6 rounded uppercase ml-8"
                >
                  chat with seller
                </button>
                <div
                  className="text-base bg-BACKGROUND_GREEN text-white
                 py-2 px-6 rounded uppercase w-full mt-4 text-center font-semibold"
                >
                  make an offer
                </div>
                <div className="mt-8 ml-8">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="mr-3 text-GREEN-_100"
                    size="xl"
                  />
                  {item.location}
                  <span className="ml-4">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mr-3 text-GREEN-_100"
                      size="xl"
                    />
                    {item.timeSeen}
                  </span>
                </div>
                <div></div>
              </div>
         </div>
          ))}
         
         {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlayModal"></div>
          <div className="modal-content">
            
          <div className="details">
          {details.map((item) => (
            <div key={item._id}>
              <div className="box">
              <div class="flex items-center">
                  <img
                    class="w-20 h-20 rounded-full mr-4"
                    src={userProfile}
                    alt="Avatar"
                  />
                  <div class="">
                    <p class="text-2xl tracking-wide uppercase font-semibold text-GREEN-_100">
                   {item.name}
                      <br />
                      <span className="text-black text-lg">
                        {" "}
                        Last Seen: {item.timeSeen}
                      </span>
                      <br />
                      <span className="text-GREEN-_100 text-lg">
                        {" "}
                        <FontAwesomeIcon
                      icon={faPhone}
                      className="mr-3 text-GREEN-_100"
                      size="xl"
                    />
                        {item.phoneNumber}
                      </span>
                    </p>
                    <button
                  className=" text-sm bg-BACKGROUND_GREEN text-white
                 py-2 px-6 rounded uppercase "
                >
                  copy number
                </button>
                  </div>
                </div>
                </div>
            <button className="close-modal text-GREEN-_100 text-2xl" onClick={toggleModal}>
              X
            </button>
          </div>
            ))}
            </div>
        </div>
        </div>
      )}
        </div>

   </>
  )
}

export default SellerContact