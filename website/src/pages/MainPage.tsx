import PlayGameComponent from "../components/mainPage/PlayGameComponent"
import RankingComponent from "../components/mainPage/RankingComponent"
import ProfileComponent from "../components/mainPage/ProfileComponent"

import "../style/mainPage/_mainPage.scss"

const MainPage = () =>{
    return(
        <div className="mainPage" >
            <PlayGameComponent/>
            <RankingComponent/>
            <ProfileComponent/>
        </div>
    )
}

export default MainPage