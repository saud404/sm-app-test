import fetch from "node-fetch";
const FACEBOOK_GRAPH_URL = "http://graph.facebook.com/v18.0";
const APP_ID='736985738392095';
const APP_SECRET = 'e22b41448829af012a72b583c60d2147';
export const getAppAccessToken = async () => {
    const response = await fetch(`https://graph.facebook.com/v18.0/oauth/access_token?client_id=${APP_ID}&client_secret=${APP_SECRET}&grant_type=client_credentials`);
    const  data :  {access_token: string} | any= await response.json();
    if(!response.ok){
        throw new Error("App Access token failed");
    }
    return data.access_token;
}

export const debugToken = async (appAccessToken: string, token:string) => {
    const response = await fetch(`${FACEBOOK_GRAPH_URL}/debug_token?input_token=${token}&access_token=${appAccessToken}`);
    const data: {data: { scopes: string[]} } | any= await response.json();
    return data.data.scopes;
}
type FBpost = {
    "access_token": string;
    "category": string;
    "category_list": { "id": string, "name": string; }[];
    "name": string;
    "id": string;
    "tasks": string[];
}
export const getPagesBaseToken = async (userToken: string) => {
    const response = await fetch(`${FACEBOOK_GRAPH_URL}/me/accounts&access_token=${userToken}`);
   
    const data: {data: FBpost[]} | any= await response.json();
   if(response.ok){
       return data.data;
   }
   throw new Error("Something went wrong!");
}

export const createPagePost = async (pageId: string, pageToken: string, message: string) => {
    const response = await fetch(`${FACEBOOK_GRAPH_URL}/${pageId}/feed?message=${message}/access_token=${pageToken}`,
    {
        method: "POST",
    }
    );

    const data : {id: string, error?: { message: string} } | any = await response.json();
   console.log('Data-> ', data);
    // const data: {data: FBpost[]} = await response.json();
   if(response.ok){
       return data.id;
   }
   throw new Error("Something went wrong!");
}