import { useState } from "react"
import "../style/gamePage/gamePage.scss"
import Field from "../components/gamePage/Field"
import { FieldInfo } from "../interfaces"


const  GamePage=()=>{

    const [yourTurn,setYourTurn] = useState(false)

    const tab:FieldInfo[][] =[]
    for(let i = 0;i<15;i++){
        const row =[]
        for(let j =0;j<15;j++){
            row.push({letter:"",status:"empty"})
        }
        tab.push(row)
    }

    const [board,setBoard] = useState(tab)


    return(
        <div className="gamePage" >
            <div className="gamePage_header" >
                <div className="gamePage_player" ></div>
                <div className="gamePage_gameInformation" >
                {yourTurn?<h3 >Twoja kolej</h3>:<h3>Przeciwnika kolej</h3>}
                <h4>Zostało literek:</h4>
                </div>
                <div></div>
                <div className="gamePage_player" ></div>
            </div>
            <div className="gamePage__board" >
                {board.map((row,i)=>row.map((ele,j)=>{return<Field i={i} j={j} fieldInfo={ele} />}))}
            </div>
            <div className="gamePage_hand" ><div className="field" style={{"width":"1.25rem","height":"1.25rem"}} ></div></div>
        </div>
    )
}

export default GamePage