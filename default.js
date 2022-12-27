import { products } from "./constant/data"
import Product from "./model/product_schema";


const DefaultData = async () => {
    try {
        // await Product.deleteMany({})
        await Product.insertMany(products)
        console.log("success");
    } catch (error) {
        console.log(`error while inserting default data`);
    }

}
export default DefaultData