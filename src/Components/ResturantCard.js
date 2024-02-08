
const RestaurantCard = (props) => {
    const {name, areaName, cuisines, cloudinaryImageId ,sla} = props?.card;
    return (
        <div className="m-2 p-2 hover:bg-gray-200 rounded-xl"> 
            <div className="w-44">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
                    className="rounded-2xl w-44 h-40"
                    alt="img"
                />
                <div className="p-2 m-2">
                <h3 className="font-extrabold text-gray-800">{name}</h3>
                <h3 className="font-bold text-gray-700">{sla.slaString}</h3>
                <p className="font-semibold">{cuisines.join(", ")}</p>
                <p>{areaName}</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;