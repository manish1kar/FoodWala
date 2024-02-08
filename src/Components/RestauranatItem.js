import RestauranatItemList from "./RestaurantItemList";

const RestaurantItem = ({data, showItems, setShowIndex}) => {

    const clickHandler = () => {
        setShowIndex();
    }

    return (
        <div className="w-9/12 mx-auto m-2 p-2 border-b-8 shadow-2xl">
            <div className=" flex justify-between cursor-pointer" onClick={clickHandler}>
                <span className="font-bold to-gray-600">{data.title} ({data?.itemCards?.length}) </span>
                <span>⬇️</span>
            </div>
            <div>
                {
                    showItems && <RestauranatItemList items = {data?.itemCards}/>
                }
            </div>
        </div>
    )
}

export default RestaurantItem;