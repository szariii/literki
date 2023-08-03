import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import settings from "../settings.json";
import PositionComponent from "../components/leaderboardPage/PositionComponent";
import "../style/leaderboardPage/_leaderboardPage.scss"

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState<
    { _id: string; nick: string; points: number }[]
  >([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("test");
    const data = await axios.get(`${settings.address}/leaderboard`);
    console.log(data);
    setLeaderboard(data.data);
  };

  return (
    <div className="leaderboardPage" >
      {leaderboard.length === 0 ? (
        <FontAwesomeIcon icon={faSpinner} className="leaderboardPage__icon" spinPulse />
      ) : (
        <>
          <h2>Ranking</h2>
          <div className="leaderboardPage__ranking" >
            {leaderboard.map((player, place) => (
              <PositionComponent
                points={player.points}
                place={place}
                nick={player.nick}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LeaderboardPage;
