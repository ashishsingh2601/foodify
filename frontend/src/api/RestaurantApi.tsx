import { RestaurantSearchResult } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurants = (cityName?: string) => {
  const createSearchRequest = async (): Promise<RestaurantSearchResult> => {

    console.log("city inside", cityName);

    console.log("url", `${API_BASE_URL}/api/restaurant/search/${cityName}`);
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${cityName}`
    );

    console.log("Fetch response:", response);

    if (!response.ok) {
      throw new Error("Failed to search restaurants :(");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants"],
    createSearchRequest,
    { enabled: !!cityName }
  );
  return { results, isLoading };
};
