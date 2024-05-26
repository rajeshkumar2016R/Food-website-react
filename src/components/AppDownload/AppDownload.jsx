import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return <div className="AppDownload" id="AppDownload">
    <p>For Best Experience download <br /> Foodies App</p>
    <div className="app-download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
    </div>
  </div>;
};

export default AppDownload;
