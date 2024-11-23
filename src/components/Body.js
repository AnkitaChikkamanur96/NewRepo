import RestaurantCard from "./RestaurantCard";
import  resList from "./resList";
import { useState } from "react";



let listOfRestaurants = [
    {
      type: "restaurant",
   data: {
    id: "7890",
    resName: "McDonals",
    cuisine: "Burger, Fries",
    star: "4.9",
    time: "40 mins"
   }
},
{
    type: "restaurant",
    data: {
        id: "1234",
        resName: "Meghana Biriyani",
        cuisine: "Biriyani, Asian",
        star: "4.4",
        time: "38 mins"
    },
},
{
    type: "restaurant",
    data: {
        id: "5678",
        resName: "Dominos",
        cuisine: "Pizza, Burger",
        star: "3.8",
        time: "30 mins"
    },
},
];

const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        //Filter logic 
                        listOfRestaurants = listOfRestaurants.filter((res) => 
                            res.data.star > 4
                    );
                    console.log(listOfRestaurants);
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