import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRankingStar } from "@fortawesome/free-solid-svg-icons"
import "../../style/mainPage/_componentSizesVariables.scss";
import { useNavigate } from "react-router-dom";

const RankingComponent=()=>{
    const navigate = useNavigate()

    const clickHandler=()=>{
        navigate("/leaderboard")
    }


    return(
        <div className="mainPageComponent" >
            <FontAwesomeIcon className="mainPageComponent__icon" icon={faRankingStar}/>
            <button onClick={clickHandler} className="mainPageComponent__button" >Ranking</button>
        </div>
    )
}

export default RankingComponent