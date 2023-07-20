import "../../style/gamePage/letterInHand.scss";

const LetterInHand = ({id,letter}:LetterInHand) => {
  const hoverEffect = () => {};
  

  return <div className="letterInHand">{letter}</div>;
};

interface LetterInHand{
  id:number
  letter:string
}

export default LetterInHand;
