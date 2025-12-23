import { Link } from "react-router-dom";

type Props = {
  totalPagesForQuery: number;
  cityName: string;
};

const SearchResultsInfo = ({ totalPagesForQuery, cityName }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        {totalPagesForQuery} Restaurants found in {cityName}
        <Link
          to="/"
          className="ml-1 text-sm font-semibold underline cursor-pointer text-blue-500"
        >
          Change Location
        </Link>
      </span>
      insert sort dropdown here
    </div>
  );
};

export default SearchResultsInfo;