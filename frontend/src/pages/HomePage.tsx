import { Carousel } from "@/components/Carousel";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { carouselItems } from "@/utils/carouselItems";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-9 flex flex-col gap-6 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Order something delicious today
        </h1>
        <span className="text-xl">Tasty food in one click</span>
        <SearchBar
          placeHolder="Search by city or town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Carousel items={carouselItems} autoplayInterval={3000} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Cuisines we serve
          </span>
          <span>We Believe in Variety</span>
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-pasta-cartoon-illustration_52683-128121.jpg"
            className="object-contain object-center"
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
