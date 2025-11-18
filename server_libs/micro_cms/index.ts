import { createClient, MicroCMSQueries } from "microcms-js-sdk";
import { bowling } from "./data";

if (!process.env.MICRO_CMS_SERVICE_DOMAIN) {
  throw new Error("MICRO_CMS_SERVICE_DOMAIN is not defined");
}

if (!process.env.MICRO_CMS_API_KEY) {
  throw new Error("MICRO_CMS_API_KEY is not defined");
}

const client = createClient({
  serviceDomain: process.env.MICRO_CMS_SERVICE_DOMAIN,
  apiKey: process.env.MICRO_CMS_API_KEY,
});



export function getBowlingsList(queries?: MicroCMSQueries) {
    return client.getList<bowling>(
        {
            endpoint: "bowling",
            queries: queries,
        }
    )
}


export async function getBowling (
    contentId: string,
    queries?:MicroCMSQueries
) {
    const detailData = await client.getListDetail<bowling>({
        endpoint: "bowling",
        contentId,
        queries
    });
    return detailData;
};