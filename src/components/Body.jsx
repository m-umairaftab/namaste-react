import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import { FETCH_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const fetchData = async () => {
  //   const data = await fetch(FETCH_MENU_URL);

  //   const json = await data.json();

  //   console.log("object", json);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  useEffect(() => {
    setFilteredRestaurant(resList);
  }, [setFilteredRestaurant]);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filtededRest = filteredRestaurant.filter((res) =>
                res.data.name.toLocaleLowerCase().includes(searchText)
              );
              setFilteredRestaurant(filtededRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filterList = filteredRestaurant.filter(
              (res) => res.data.avgRating >= 4
            );
            setFilteredRestaurant(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <>
            {/* <Shimmer /> */}
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          </>
        ))}
      </div>
    </div>
  );
};
