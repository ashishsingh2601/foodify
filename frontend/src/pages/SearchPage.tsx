import { useSearchRestaurants } from "@/api/RestaurantApi";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultsCard from "@/components/SearchResultsCard";
import SearchResultsInfo from "@/components/SearchResultsInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
    searchQuery: string;
    page: number;
}

const SearchPage = () => {
  const { cityName } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
  });
  const { results, isLoading } = useSearchRestaurants(searchState, cityName);

  console.log("results in search page:", results);

  if (!results?.data || !cityName) {
    return (
      <span>
        No restaurants found for <b>{cityName}</b>
      </span>
    );
  }

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  }

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page: 1,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
    }));
};

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
      <div id="cuisines-list">Insert Cuisines List Here</div>
      <div id="main-content" className="flex flex-col gap-6">
        <SearchBar 
            searchQuery={searchState.searchQuery}
            onSubmit={setSearchQuery} 
            placeHolder="Search by Cuisine or Restaurant name" 
            onReset={resetSearch} 
        />
        <SearchResultsInfo
          totalPagesForQuery={results.pagination.totalPagesForQuery}
          cityName={cityName || ""}
        />
        {results.data.map((restaurant) => (
          <SearchResultsCard
            restaurantName={restaurant}
          />
        ))}
        <PaginationSelector 
            page={results.pagination.page} 
            pages={results.pagination.totalPagesForQuery} 
            onPageChange={setPage} 
        />
      </div>
    </div>
  );
};

export default SearchPage;
