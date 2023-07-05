import { FieldInfo } from "../../interfaces"
import "../../style/gamePage/field.scss"

import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

const Field = ({fieldInfo,i,j}:Field) =>{
    console.log(fieldInfo)
    const game = useSelector((state:RootState)=>state.gameData)
    
    let className=""
    game.bonusPlaces.map(ele=>{
        if(ele.i===i && ele.j===j){
            className=`--${ele.type}`
        }
    })

    if(i===7&&j===7){
        className="--start"
    }

    return(
        <div className={`field${className}`} >{fieldInfo.letter}</div>
    )
}
export default Field

interface Field{
    fieldInfo:FieldInfo,
    i:number
    j:number
}