import { chromium } from "playwright";


import { providers, type ProductStoCheck } from "./wanted";
import { addProduct } from "./service";


//TODO - get product title from url



type Data = {
    products: {
        updatedAt: string,
        price: string
        url: string,
        name: string,
        available: boolean,
        error?: string
    }[]
}


export const run = async (productStoCheck: ProductStoCheck, saveInDB: boolean = true) => {



    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    for (let index = 0; index < productStoCheck.length; index++) {
        await page.goto(productStoCheck[index].url);





        const selector = providers[productStoCheck[index].provider].selector


        // await page.waitForSelector(".a-price-whole");
        await page.waitForSelector(selector);
        let provider = productStoCheck[index]

        // const product = await page.$eval(".a-price-whole", (result) => {
        const product = await page.$eval(selector, (result) => {




            if (result instanceof SVGElement) return


            // console.log(productStoCheck)
            // if (productStoCheck[index].provider === "BLUE_TOMATO") {
            //     console.log("yess")
            // }


            //
            // const price = result ? result.innerText.split("\n")[0] : null;

            const price = result ? result.innerText.split("\n")[0] : null;



            // return { result }
            return { price };
        });

        console.log(product);



        // console.log(".....", product?.result.innerText.split("\n")[0])


        if (product) {


            if (!product.price) {
                console.log("price is null")
                return
            }

            //Strip all non-numeric chars
            let price = product.price.replace(/\D/g, '');





            // price = parseInt(product.price.replaceAll(".", "").replaceAll(",", ""))

            price = parseInt(price)

            if (saveInDB) {
                await addProduct(productStoCheck[index].name, price, new Date().toISOString())
            }
            else {
                console.log(productStoCheck[index].name, price, new Date().toISOString())
            }



            // check if available, 


            // await db.update(({ products }) => products.push(
            //     {
            //         updatedAt: new Date().toISOString(),
            //         name: productStoCheck[index].name,
            //         price: product.price,
            //         url: productStoCheck[index].url,
            //         available: true,
            //     })
            // )


        }

    }

    await browser.close();

}