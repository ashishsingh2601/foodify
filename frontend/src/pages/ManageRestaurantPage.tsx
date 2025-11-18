import { useCreateMyRestaurant, useGetmyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
    const {createRestaurant, isLoading} = useCreateMyRestaurant();
    const { restaurant } = useGetmyRestaurant(); 

    return <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} restaurant={restaurant} />;
};

export default ManageRestaurantPage;