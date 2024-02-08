import { useEffect, useState } from "react";

const useRestaurant = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
      getData();
    }, []);

    const  getData = async () => {
  
      const result = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.956924&lng=77.701127&restaurantId="+resId);
  
      const response = await result.json();

      console.log("response", response)
      setResInfo(response);
      
    }

    return resInfo;

}

export default useRestaurant;