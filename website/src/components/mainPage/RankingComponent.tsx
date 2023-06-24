import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRankingStar } from "@fortawesome/free-solid-svg-icons"
import "../../style/mainPage/componentSizesVariables.scss";

const RankingComponent=()=>{
    return(
        <div className="mainPageComponent" >
            <FontAwesomeIcon className="mainPageComponent__icon" icon={faRankingStar}/>
            <button className="mainPageComponent__button" >Ranking</button>
        </div>
    )
}

export default RankingComponent