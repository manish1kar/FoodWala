import { Link } from "react-router-dom";
import RestaurantCard from "./ResturantCard";
import { useEffect, useState } from "react";


const Restaurant = () => {
    const [restaurants, setrestaurants] = useState([]);
    const [filterRestaurants, setfilterRestaurants] = useState([]);
    const [search, setSearch] = useState("");

    const  getData = async () => {
  
      const result = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127')
  
      const response = await result.json();
    
      setrestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilterRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    // console.log("restaurants",restaurants)
  
    useEffect(()=>{
      getData();
    }, []);

    const searchHandler = () => {
        const filterRes = restaurants.filter((data) => (
          data?.info?.name.toLowerCase().includes(search.toLowerCase())
        ))
        setfilterRestaurants(filterRes)

        }

    return (
        <div className="">
            <h1 className="p-2 m-2 mb-0 text-center font-extrabold text-2xl"
            >Restaurants with online food delivery in Bangalore
            </h1>
            <div className="bg-blue-400 h-1 w-6/12 mx-auto mb-2 rounded-lg"></div>
            <div className="flex justify-between mx-auto">
            <button className="p-2 m-2 bg-green-200 " 
            onClick={()=>{
                const filterList = filterRestaurants.filter((data) => (
                    data.info.avgRating > 4
                ))
                setfilterRestaurants(filterList);
            }}
            >Top Restauranats</button>
            <div>
            <input 
                placeholder="Search" 
                className="p-2 m-2 border" 
                type="text" 
                value={search} 
                onChange={(e)=>{
                    setSearch(e.target.value)
                    }
                }/>
            <button className="p-2 m-2 ml-0 bg-green-500"
            onClick={searchHandler}
            >Search</button>
            </div>
            </div>
            <div className="w-10/12 flex flex-wrap mx-auto">
            {
                filterRestaurants.map((data) => (
                   <Link to={"restaurants/"+data.info.id}><RestaurantCard key={data?.info?.id} card={data.info}/></Link>
                )
                ) 
            }
            </div>
        </div>
    )
}

export default Restaurant;