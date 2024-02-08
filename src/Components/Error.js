import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    //console.log(err)
    return <div>Error Hai Bhai 404 Aa Gaya Kahi Or Jaa</div>
}

export default Error;