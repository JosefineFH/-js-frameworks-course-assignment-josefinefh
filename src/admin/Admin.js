import Heading from "../components/Layout/Heading";
import GetFromLocalStorage from "./CheckLogedIn";

export default function Admin(){
  GetFromLocalStorage();
  return(
    <div className="container">
    <Heading title="Admin Page"/>
    <p>You are now loged in and your token is in the local storage. </p>
    </div>
  )
}