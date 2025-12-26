import { Request, Response } from "express";
import Restaurant from "../models/restraunt";
import cloudinary from "cloudinary";
import mongoose from "mongoose";
import Order from "../models/order";

const getMyRestaurant = async (req: Request, res: Response) => {
    try {
        const restaraunt = await Restaurant.findOne({user: req.userId});
        if(!restaraunt){
            return res.status(404).json({message: "Restaraunt not found :):"});
        }
        res.status(200).json(restaraunt);
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Error fetching restaraunt :):"});
    }
}

const getMyRestaurantOrders = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findOne({ user: req.userId });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found :):" });
    }

    const orders = await Order.find({ restaurant: restaurant._id })
      .populate("restaurant")
      .populate("user");

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong while fetching orders :):" });
  }
};

const createMyRestaurant = async (req: Request, res: Response) => {
    try {
        const existingRestaurant = await Restaurant.findOne({
            user: req.userId
        });

        if(existingRestaurant){
            return res.status(409).json({message: "User already has a restaurant"});
        }

        const imageUrl = await uploadImage(req.file as Express.Multer.File);
        if (!imageUrl) {
            return res.status(400).json({ message: "Image file is required" });
        }

        const restaurant = new Restaurant(req.body);
        restaurant.imageUrl = imageUrl;
        restaurant.user = new mongoose.Types.ObjectId(req.userId);
        restaurant.lastUpdate = new Date();
        await restaurant.save();

        res.status(201).send(restaurant);
    } catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong :):"});
    }
}

const updateMyRestaurant = async (req: Request, res: Response) => {
    try {
        const restaurant = await Restaurant.findOne({ user: req.userId });

        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found :):" });
        }

        restaurant.restaurantName = req.body.restaurantName;
        restaurant.cityName = req.body.cityName;
        restaurant.countryName = req.body.countryName;
        restaurant.deliveryPrice = req.body.deliveryPrice;
        restaurant.estimatedDeliveryTime = req.body.estimatedDeliveryTime;
        restaurant.cuisines = req.body.cuisines;
        restaurant.menuItems = req.body.menuItems;
        restaurant.lastUpdate = new Date();
        res.status(200).json(restaurant);

        if (req?.file) {
            const imageUrl = await uploadImage(req.file as Express.Multer.File);
            restaurant.imageUrl = imageUrl;
        } 
        await restaurant.save();
        res.status(200).send(restaurant);
    }catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong :):" });
    }
}


const uploadImage = async (file: Express.Multer.File): Promise<string> => {
    const image = file as Express.Multer.File;
    const base64Image = Buffer.from(image?.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${base64Image}`;

    const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);
    return uploadResponse.url;
}

export default {
    getMyRestaurant,
    createMyRestaurant,
    updateMyRestaurant,
    getMyRestaurantOrders,
};
