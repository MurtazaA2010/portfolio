import React from "react";
import './loader.css'
import ScaleLoader from "react-spinners/ScaleLoader"

const PreLoader = () => {
  return (
    <div className="preloader">
      <ScaleLoader color="#36d7b7"   className="preloader" />  
    </div>
  )
}

export default PreLoader;