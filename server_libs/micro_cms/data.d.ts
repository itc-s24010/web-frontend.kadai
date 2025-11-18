import { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type bowling = {
    name: string
    location: string
    latitude: number
    longitude: number
    lanes: number
    facilities: string

    weekday: string
    weekend: string
    
    parking: boolean
    foods: boolean
    wheelchair: boolean
    
    description: string
    image: MicroCMSImage

    phone: string
    website: string
} & MicroCMSListContent