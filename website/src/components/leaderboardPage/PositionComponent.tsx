import "../../style/leaderboardPage/_positionComponent.scss";

const PositionComponent = ({ place, nick, points }: Position) => {
  return (
    <div className="position" style={place%2===1?{backgroundColor:"#61d2e2"}:{}} >
      <h3 className="position__placeText">{place+1}.</h3>
      <h3 className="position__nickText">{nick}</h3>
      <h3 className="position__pointsText">{points}</h3>
    </div>
  );
};

export default PositionComponent;

interface Position {
  place: number;
  nick: string;
  points: number;
}
