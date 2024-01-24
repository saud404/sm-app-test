import { createPagePost } from "@/api_helper/fb";
import { NextApiRequest, NextApiResponse } from "next";
import { getPage } from '../../api_helper/storage';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const page = getPage();
   const pagePost = await createPagePost(page.pageId, page.pageToken, 'Testing');
   res.status(200).json({messaege: "Page Post Created"});

}
