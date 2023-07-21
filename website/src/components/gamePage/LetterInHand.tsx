import "../../style/gamePage/letterInHand.scss";

const LetterInHand = ({id,letter,selectedLetter,setSelectedLetter}:LetterInHand) => {
  

  return <div style={id!==selectedLetter?{}:{backgroundColor:"#c36b84"}} onClick={()=>setSelectedLetter(id)} className="letterInHand"><h4>{letter}</h4></div>;
};

interface LetterInHand{
  id:number
  letter:string
  selectedLetter:number
  setSelectedLetter:React.Dispatch<React.SetStateAction<number>>
}

export default LetterInHand;
