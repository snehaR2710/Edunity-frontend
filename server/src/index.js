import dotenv from 'dotenv';
import cloudinary from 'cloudinary';
import Razorpay from 'razorpay';
import {app} from './app.js'
import { connectToDb } from './dbConnection/db.js';
// import { createProxyMiddleware } from 'http-proxy-middleware';



dotenv.config({
    path: './env'
});

// app.use('')


// cloudinary configuration
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET
});


connectToDb()
.then(() => {
    app.on("error", (error) => {
        console.log("Error: ", error);
        throw error;
    });
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Mongo DB connection Faild !!!", err);
});