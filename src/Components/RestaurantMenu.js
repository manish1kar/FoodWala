import { useParams } from "react-router-dom";
import useRestaurant from "../Hooks/useRestaurant";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantItem from "./RestauranatItem";
import {useState} from "react";
const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null)

    const {resId} = useParams()
    const resInfo = useRestaurant(resId)

    if(resInfo === null) {return <h1>Loading...</h1>}

    const info = resInfo?.data?.cards[0];
    const categorys = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c) =>
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    //console.log(categorys)

    return(
        <div>
        <div>RestaurantInfo</div>
         <div>
             <RestaurantInfo data={info}/>
        </div> 
        <div>
        {
            categorys.map((item, index) => (
                 <RestaurantItem 
                 key={index} 
                 data={item?.card?.card}
                 showItems ={index === showIndex ? true : false}
                 setShowIndex = {()=> {setShowIndex(index)}}
                 />  
            ))
        }
             
        </div> 
        </div>
    )
}

export default RestaurantMenu;