import { useDispatch, useSelector } from "react-redux";
import RestauranatItemList from "./RestaurantItemList";
import { clearCart } from "../Redux/cartSlice";


const Cart = () => {
    const itemList = useSelector((store) => store?.cart?.items)

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(clearCart())
    }

    console.log(itemList)
    return (
        <div className="w-7/12 m-auto p-4">
            <h1 className="text-center font-extrabold text-2xl ">Cart</h1>
            <button className=" p-2 bg-green-400"
            onClick={clickHandler}
            >Clear Cart</button>
            <div>
                <RestauranatItemList items = {itemList} />
            </div>
        </div>
    )
}

export default Cart;