import { useSearchRestaurants } from "@/api/RestaurantApi";
import SearchResultsCard from "@/components/SearchResultsCard";
import SearchResultsInfo from "@/components/SearchResultsInfo";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { cityName } = useParams();
  const { results, isLoading } = useSearchRestaurants(cityName);

  console.log("results in search page:", results);

  if (!results?.data || !cityName) {
    return (
      <span>
        No restaurants found for <b>{cityName}</b>
      </span>
    );
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
      <div id="cuisines-list">Insert Cuisines List Here</div>
      <div id="main-content" className="flex flex-col gap-6">
        <SearchResultsInfo
          totalPagesForQuery={results.pagination.totalPagesForQuery}
          cityName={cityName || ""}
        />
        {results.data.map((restaurant) => (
          <SearchResultsCard
            restaurantName={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
