import { useParams } from "react-router-dom";

const SearchPage = () => {
    const {cityName} = useParams();

    return <span>User searched for {cityName}</span>
}

export default SearchPage;