"use client"
import Script from "next/script";
import { Fragment, useEffect } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://sm-app-test-h0dv7zzlo-saud404.vercel.app";
export default function FBHome() {
  const login = () => {
    window.FB.login((response) => {
      if(response.status === 'connected') {
        console.log(response.authResponse.accessToken);
        fetch(`${API_URL}/api/hello?token=${response.authResponse.accessToken}`)
        .then((response) => response.json())
        .then((data) => console.log("data", data));
      }
    },{
      scope: "public_profile, page_read_engagement,page_manage_posts",
    });
  };
 
  useEffect(() => {
    window.fbAsyncInit = function() {
        window.FB.init({
          appId            : '736985738392095',
          xfbml            : true,
          version          : 'v18.0'
        });
    };
}, []);

const CreatePost = () => {
  fetch(`${API_URL}/api/post`)
        .then((response) => response.json())
        .then((data) => console.log("data", data));
 
}
  return (
    <>
     <Fragment>
<Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js" /> 
<div>FaceBookConnect</div>
  <button className="p-4 text-white bg-red-500 border-spacing-1 rounded-2xl" onClick={login}>Get FaceBook Access</button>
  <br />
  <button className="p-4 text-white bg-red-500 border-spacing-1 rounded-2xl" onClick={CreatePost}>Create Post</button>
  
  </Fragment> 
    </>
  );
}
