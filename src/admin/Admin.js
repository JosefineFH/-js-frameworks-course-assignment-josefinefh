import Heading from "../components/Layout/Heading";
import GetFromLocalStorage from "./CheckLogedIn";

export default function Admin(){
  GetFromLocalStorage();
  return(
    <Heading title="Admin Page"/>
  )
}