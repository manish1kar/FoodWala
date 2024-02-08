
const RestaurantInfo = ({data}) => {

    //console.log(props)

     const {
        areaName,
        cloudinaryImageId,
        cuisines, costForTwo,
        name, feeDetails,avgRating,sla,totalRatingsString
     } = data?.card?.card?.info;

    //console.log()

    return(
        <div className="p-4 m-4 flex mx-auto justify-between w-9/12 border-b-2">
        <div>
            <h2 className="font-extrabold">{name}</h2> 
            <h2 className="text-gray-600">{cuisines.join(", ")}</h2> 
            <h2 className="text-gray-600">{areaName}, <span>{sla.lastMileTravelString}</span></h2>  
            <h2 className="text-gray-400 font-semibold text-sm">{feeDetails.message}</h2>    
        </div>
        <div>
            <div className="border text-center text-green-800">{avgRating}</div>
            <div className="border text-xs">{totalRatingsString}</div>
        </div>
        </div>
    )
}

export default RestaurantInfo;