import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import { useSelector } from "react-redux";


const Navbar = () => {
    const [status, setStatus] = useState(false);

    const cart = useSelector((store)=> store.cart.items)

    const onlineStatus = useOnlineStatus();

    const clickHandler = ()=>{
        setStatus(!status)
    }
    return(
        <div className="flex justify-between bg-green-100 shadow-lg">
            <img className="w-20"
            src = "https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
                alt="logo"
            />
            <ul className="flex p-4 m-4 gap-4">
                <li>
                    {onlineStatus ? <span>💚</span> : <span>❤️</span>}
                </li>
                <li>
                    <Link to={"/"}>
                        Home
                    </Link> 
                </li>
                <li>
                    Contact
                </li>
                <li>
                    <Link to={"/about"}>
                        About
                    </Link> 
                </li>
                <li>
                    <Link to={"/cart"}>
                        Cart ({cart.length} Items)
                    </Link>
                </li>
                <li>
                    <button onClick={clickHandler}
                    className="bg-green-400 px-1 mx-1"
                    >
                        {!status ? <span>logIn</span> : <span>logOut</span>}
                    </button>
                    
                </li>
            </ul>
        </div>
    )
}

export default Navbar;