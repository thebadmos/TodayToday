import React, { useState } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UploadFile() {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };

  return (
    <div>
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="200" height="300" />
        ) : (
          <>
            {/* <span className="fa-stack fa-2x mt-3 mb-2">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-store fa-stack-1x fa-inverse" />
            </span> */}
            <div class="w-40 h-40 rounded-full border-2 border-gray flex justify-center items-center">
              <AddRoundedIcon sx={{ fontSize: "80px" }}  />
              {/* <FontAwesomeIcon icon={faInstagram} size="lg" /> */}
            </div>
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <p className="text-base">
        Each picture must not exceed 5 Mb Supported formats are .jpg, .gif and
        .png
      </p>

      {/* <br />
      <button onClick={handleUpload}>Upload</button> */}
    </div>
  );
}
