"use client"
import Image from "next/image";
import Script from "next/script";
import { Fragment, useEffect } from "react";
import FBHome from "./api";

export default function Home() {
//   const login = () => {
//     window.FB.login((response) => {
//       const myToken =  response.authResponse.accessToken;
//       if(response.status === 'connected') {
//         console.log(myToken);
//         fetch(`https://15eb-39-40-59-7.ngrok-free.app/api/hello?token=${myToken}`)
//         .then((response) => console.log(response));
//       }
//     },{
//       scope: "public_profile",
//     })
//   }

//   useEffect(() => {
//     window.fbAsyncInit = function() {
//         window.FB.init({
//           appId            : '736985738392095',
//           xfbml            : true,
//           version          : 'v18.0'
//         });
//     };
// }, []);
  return (
    <>
     {/* <Fragment> */}
{/* <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js" />  */}
<FBHome />
  
  {/* </Fragment>  */}
    </>
  );
}
