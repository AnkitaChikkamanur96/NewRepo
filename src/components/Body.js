import RestaurantCard from "./RestaurantCard";
import  resList from "./resList";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";




// let listOfRestaurants = [
//     {
//       type: "restaurant",
//    data: {
//     id: "7890",
//     resName: "McDonals",
//     cuisine: "Burger, Fries",
//     star: "4.9",
//     time: "40 mins"
//    }
// },
// {
//     type: "restaurant",
//     data: {
//         id: "1234",
//         resName: "Meghana Biriyani",
//         cuisine: "Biriyani, Asian",
//         star: "4.4",
//         time: "38 mins"
//     },
// },
// {
//     type: "restaurant",
//     data: {
//         id: "5678",
//         resName: "Dominos",
//         cuisine: "Pizza, Burger",
//         star: "3.8",
//         time: "30 mins"
//     },
// },
// ];

const Body = () => {
    //using useState()
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.425938120298223&lng=78.39342287825744&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json)
        setListOfRestaurants(
            json.data.cards?.[11]?.card?.card?.gridElements?.infoWithStyle?.[0]?.info?.[19]
        );
        
    };

    // if (!listOfRestaurants || listOfRestaurants.length === 0){
    //     return <Shimmer />;
    // }
    
    return (!listOfRestaurants || listOfRestaurants.length === 0) ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        //Filter logic 
                        filteredList = listOfRestaurants.filter((res) => 
                            res.data.star >= 4
                    );
                    setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants?.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};


export default Body;