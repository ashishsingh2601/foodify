export type User = {
    _id: string;
    email: string;
    name: string;
    addressLine1: string;
    country: string;
    city: string;
};

export type MenuItem = {
    _id: string;
    name: string;
    price: number;
}

export type Restaurant = {
    _id: string;
    user: string;
    restaurantName: string;
    cityName: string;
    countryName: string;
    cuisines: string[];
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    menuItems: MenuItem[];
    imageUrl: string;
    lastUpdated: string;
}

export type RestaurantSearchResult = {
    data: Restaurant[];
    pagination: {
        totalPagesForQuery: number;
        page: number;
        pages: number;
    }
}