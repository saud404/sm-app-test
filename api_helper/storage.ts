import fs from 'fs';
export const setPage = (pageId: string, pageToken: string) => {
    fs.writeFileSync("page.json", JSON.stringify({pageId, pageToken}));
}

export const getPage = () => {
    const page = fs.readFileSync("page.json", "utf-8");
    return JSON.parse(page) as { pageId: string, pageToken: string };
}