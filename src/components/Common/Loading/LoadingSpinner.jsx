import React, { useEffect } from "react";
// import Loading from "../../../assets/image/Loading.jpg";


const LoadingSpinner = () => {
  //man ino nevashtam va midonam kasife
  const RaiseFlagToHideFooter = () => {
    const footer = document.getElementById("footer-Hider");
    if (footer) footer.style = "display:none";
  };
  const RaiseFlagToShowFooter = () => {
    const footer = document.getElementById("footer-Hider");
    if (footer) footer.style = "display:block";
  };
  useEffect(() => {
    RaiseFlagToHideFooter();
    return RaiseFlagToShowFooter;
  }, []);
  return (
    <div className="flex flex-col bg-Loading items-center bg-purple-50 justify-center h-screen">
      {/* <img className='bg-repeat object-fill' src={Loading}/> */}
      {/* <img className='size-full object-fill ' src={Loading} /> */}
      <div className="spinner border-t-4 border-purple-500 border-solid rounded-full w-16 h-16 mb-4"></div>
      <p className="text-purple-500 text-lg">Loading, please wait...</p>
    </div>
  );
};

export default LoadingSpinner;
