import { CDN_URL } from "../utils/constants";
import resList from "./resList"

const styleCard = {
    backgroundColor: "#f0f0f0"
}

   
const RestaurantCard = (props) => {
    console.log(resList);
    const { resData } = props;
    const { resName, cuisine, star, time, id } = resData?.data;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo"
            alt="res-logo"
             src={CDN_URL}></img>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{star}</h4>
            <h4>{time}</h4>
        </div>
    )
};

export default RestaurantCard;
