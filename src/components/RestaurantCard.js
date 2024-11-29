const RestaurantCard = (props) => {
    const { resData } = props;

    // Provide default values in case resData or resData.data is undefined
    const {
        resName = "Unknown Restaurant",
        cuisine = "Cuisine not available",
        star = "N/A",
        time = "N/A",
        id = "N/A",
    } = resData?.data || {};

    return (
        <div className="res-card" style={styleCard}>
            <img
                className="res-logo"
                src={resData?.data?.imageUrl || "default-image.jpg"}
                alt={resName}
            />
            <h3>{resName}</h3>
            <p>{cuisine}</p>
            <p>{star} ⭐</p>
            <p>{time}</p>
        </div>
    );
};

const styleCard = {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};
export default RestaurantCard;
