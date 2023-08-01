import PlayGameComponent from "../components/mainPage/PlayGameComponent"
import RankingComponent from "../components/mainPage/RankingComponent"
import ProfileComponent from "../components/mainPage/ProfileComponent"
import FriendsComponent from "../components/mainPage/FriendsComponent"

import "../style/mainPage/_mainPage.scss"

const MainPage = () =>{
    return(
        <div className="mainPage" >
            <PlayGameComponent/>
            <RankingComponent/>
            <ProfileComponent/>
            <FriendsComponent/>
        </div>
    )
}

export default MainPage