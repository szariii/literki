//Pages
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

//Components
import Nav from "./components/nav/Nav";

//Style
import "./style/app/_app.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useCookies } from 'react-cookie';

import { useSelector,useDispatch } from "react-redux";

import { RootState, store } from "./redux/store";

import { add } from "./redux/slicers/userData";

import axios from "axios";

import settings from "./settings.json"

const App = () => {
  const dispatch = useDispatch()
  const [cookies,setCookies] = useCookies(["user"])
  const user = useSelector((state:RootState)=>state.userData)
  console.log("lecieć")

  

  const rememberUser = async()=>{
    console.log(window.location)
    if(user._id==="0"){
      console.log(cookies.user)
      if(cookies.user){
        console.log("można fetcha")
        const data = await axios.post(`${settings.address}/getUserData`,{id:cookies.user})
        console.log(data)
        if(data.data.success){
          dispatch(add(data.data.data))
          console.log(data.data.data)
          return
        }
      }
      console.log("prze redirect")
      console.log(window.location)
      if(window.location.href!==(window.location.origin+"/")){
        window.location.replace(`${window.location.origin}`)
      }
    }
  }

  rememberUser()

  

  return (
    <div className="appContainer">
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
