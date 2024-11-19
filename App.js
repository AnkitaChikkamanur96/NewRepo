

import React from "react";
import ReactDOM from "react-dom/client";


const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHv_nTKn2I7Ce9vs7Jxuewht5t0DBa378EWZWyZVfwaD2eWoiS1l7VdOU&s"></img>
             </div>

             <div className="nav-items">
                 <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                 </ul>
             </div>
        </div>
    );
};

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo"
            alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5J9opcoVVoIY9PAKnQpr5HgN7PDvD6qU09Z7DqnJR0FqZFyjhcxsEMQ&s"></img>
            <h3>Meghana Foods</h3>
            <h4>Biriyani, North Indian</h4>
            <h4>4.4 starts</h4>
            <h4>38 mins</h4>
        </div>
    )
}

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                 {/* Reastaurant cards */}
                 <RestaurantCard />
                 <RestaurantCard />
                 <RestaurantCard />
                 <RestaurantCard />
                 <RestaurantCard />
                 <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app">
        <Header />
        <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
