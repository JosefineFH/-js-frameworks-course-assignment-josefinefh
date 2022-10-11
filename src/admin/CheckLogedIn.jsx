import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GetFromLocalStorage(){
  const [auth, setauth] = useState([]);
  let history = useNavigate();

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('auth'));
  if(items !== null ){
      setauth(items);
      history("/admin");
  } else {
    console.log("You are not logged in");
    history("/login");
  }
}, []);
}