import { debugToken, getAppAccessToken, getPagesBaseToken } from "@/api_helper/fb";
import { getPage, setPage } from "@/api_helper/storage";
import fetch from "node-fetch";
export default async function handler(req: any, res:any){
    const appAccessToken =  await getAppAccessToken();
    const scopes = await debugToken(appAccessToken, req.query.token);
    const pages = await getPagesBaseToken(req.query.token);
    const page = pages?.[0];
    if(!page){
        return res.status(500); 
    }
    setPage(page.id, page.access_token);
    console.log("Checking Page", getPage());
    console.log(scopes);
    res.json({ scopes, accessToken: pages?.[0].access_token});

}
