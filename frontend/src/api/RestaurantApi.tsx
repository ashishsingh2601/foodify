import { SearchState } from "@/pages/SearchPage";
import { RestaurantSearchResult } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurants = (searchState: SearchState, cityName?: string) => {
  const createSearchRequest = async (): Promise<RestaurantSearchResult> => {

    console.log("city inside", cityName);

    console.log("url", `${API_BASE_URL}/api/restaurant/search/${cityName}`);

    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));

    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${cityName}?${params.toString()}`
    );

    console.log("Fetch response:", response);

    if (!response.ok) {
      throw new Error("Failed to search restaurants :(");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants", searchState],
    createSearchRequest,
    { enabled: !!cityName }
  );
  return { results, isLoading };
};
