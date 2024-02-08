import { useDispatch } from "react-redux";
import { addItems } from "../Redux/cartSlice";

const RestauranatItemList = ({items}) => {

    const dispatch = useDispatch();

    const clickHandler = (item) => {
        dispatch(addItems(item))
    }
    
    return (
        items.map((item) => (
        <div className="flex justify-between m-4 p-4">
            <div className="w-9/12">
            <p>{item?.card?.info?.name}</p>
            <p>Rs {item?.card?.info?.price/100}</p>
            <p className="font-light text-s py-1 my-1">{item?.card?.info?.description}</p>
            </div>
            <div className="flex relative justify-center">
                <img className="rounded-xl w-44 h-40" alt="dish" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item?.card?.info?.imageId}/>
                <button className="w-28 bg-white text-green-600 p-1 m-2 absolute bottom-0 "
                onClick={()=> clickHandler(item)}
                > 
                    ADD <sup>+</sup>
                </button>
            </div>
        </div>
        ))
    )
}

export default RestauranatItemList;