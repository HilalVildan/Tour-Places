import "bootstrap/dist/css/bootstrap.min.css";

import {data}   from "./data"

import "./App.css"
import MyNavbar from "./components/MyNavbar";
import Header from "./components/Header";
import CityCard from "./components/CityCard";



function App() {
  return <div>
  <MyNavbar/>
  <Header/>
  <CityCard props = {data}/>

  </div>;
}

export default App;
