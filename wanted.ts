
//TO-DO >> provider selectors
export const providers = {
    AMZ_NL: {
        name: "AMZ_NL",
        selector: ".a-price-whole"
    },
    AMZ_DE: {
        name: "AMZ_DE",
        selector: ".a-price-whole"
    },
    BLUE_TOMATO: {
        name: "BLUE_TOMATO",
        selector: ".c-details-box__price-current"
    }
};

export type ProductStoCheck = {
    name: string;
    url: string;
    provider: string;
}[]

export const productStoCheck: ProductStoCheck = [
    {
        name: "GeeekPi 7 inch LCD Touch Screen",
        url: "https://www.amazon.nl/-/en/GeeekPi-Raspberry-1024x600-Portable-Monitor/dp/B0CKMDGFDR/",
        provider: providers.AMZ_NL.name,
    },
    {
        name: "SanDisk Extreme PRO SDHC UHS-II Card 128GB",
        url: " https://www.amazon.nl/-/en/SanDisk-Extreme-RescuePRO-Software-Warranty/dp/B08YF7PB14",
        provider: providers.AMZ_DE.name,
    },
    {
        name: "VIJIM LS11 Table Tripod",
        url: "https://www.amazon.de/-/en/C-Clamp-Flexible-Overhead-Microphone-Streaming/dp/B09M2B4QBD",
        provider: providers.AMZ_DE.name,
    },

];





export const testProduct: ProductStoCheck = [
    {
        name: "lens",
        url: "https://www.amazon.de/-/en/SEL-200600G-Telephoto-200-600-F5-6-6-3-Suitable/dp/B07T26V9ZN",
        provider: providers.AMZ_DE.name,
    },
    {
        name: "vans ave",
        url: "https://www.blue-tomato.com/en-NL/product/Vans-Ave+2+0+Knit+Skate+Shoes-724758/?varid=305191619",
        provider: providers.BLUE_TOMATO.name,
    },
]