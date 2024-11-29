import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"; // Loading placeholder component

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState(" ");

    useEffect(() => {
        fetchData(); 
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.425938120298223&lng=78.39342287825744&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await response.json();

            // Extracting restaurant cards
            const restaurantCards = json?.data?.cards?.find(
                (card) =>
                    card?.card?.card?.["@type"] ===
                    "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
            )?.card?.card?.gridElements?.infoWithStyle?.info;

            if (restaurantCards) {
                // Format restaurants data
                const formattedRestaurants = restaurantCards.map((item) => ({
                    data: {
                        id: item?.id || "N/A",
                        resName: item?.name || "Unknown Restaurant",
                        cuisine: item?.cuisines?.join(", ") || "Cuisine not available",
                        star: item?.avgRating || "N/A",
                        time: `${item?.sla?.deliveryTime || "N/A"} mins`,
                        imageUrl: item?.cloudinaryImageId
                            ? `https://res.cloudinary.com/swift/image/upload/${item.cloudinaryImageId}`
                            : null,
                    },
                }));

                setListOfRestaurants(formattedRestaurants);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false); // Set loading to false after fetching
        }
    };

    return isLoading ? (
        <Shimmer />
    ) : (  
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" 
                    className="search-box" 
                    value={searchText}
                    onChange={(e) =>{
                        setSearchText (e.target.value);
                    }}></input>
                    <button onClick={()=>{
                        console.log(searchText);
                        listOfRestaurants.filter((res) =>{
                           filterRestaurant =  res.data.resName.includes(searchText)            
                        });

                        setListOfRestaurants(filterRestaurant);
                    }}>Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.data.star >= 4
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
