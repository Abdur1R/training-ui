import React, { useContext, useEffect, useState } from "react";
import "./CricketGame.scss";
import { Button } from "antd";
import ProtectedRoute from "../CommonFiles/ProtectedRoute";

const CricketGame = () => {
  const [state, updateState] = useState({
    firstInn: true,
    team1Score: 0,
    team2Score: 0,
    possibilities: ["0", "1", "2", "3", "4", "6", "W"],
    lastBall: "",
    team1Wicket: 0,
    team2Wicket: 0,
  });
  const GNRTNew = () => {
    return Math.floor(Math.random() * state.possibilities.length);
  };
  useEffect(() => {
    if (
      !state.firstInn &&
      (state.team2Wicket > 9 || state.team2Score > state.team1Score)
    ) {
      if (state.team2Score > state.team1Score) {
        alert("Team 2 Won");
      } else if (state.team2Score < state.team1Score) {
        alert("Team 1 Won");
      } else {
        alert("Match Tied");
      }
    }
  }, [state.team2Score, state.team2Wicket]);
  return (
    <ProtectedRoute>
      <div className="cricketGame">
        <Button
          onClick={() => {
            updateState((prev) => ({
              firstInn: true,
              team1Score: 0,
              team2Score: 0,
              possibilities: ["0", "1", "2", "3", "4", "6", "W"],
              lastBall: "",
              team1Wicket: 0,
              team2Wicket: 0,
            }));
          }}
        >
          Restart
        </Button>
        <div>
          Team1 Total Score: {state.team1Score ?? 0}/{state.team1Wicket ?? 0}{" "}
          {!state.firstInn && "Batting Done"}
        </div>
        <div>
          Team2 Total Score: {state.team2Score ?? 0}/{state.team2Wicket ?? 0}{" "}
          {state.firstInn && "Yet to bat"}
        </div>
        <Button
          onClick={() => {
            updateState((prev) => {
              const thisBall: any = state.possibilities[GNRTNew()];
              console.log("thisBall", thisBall);
              return state.firstInn
                ? {
                    ...prev,
                    team1Score:
                      prev.team1Score +
                      (thisBall !== "W" ? Number(thisBall) : 0),
                    lastBall: thisBall,
                    team1Wicket: prev.team1Wicket + (thisBall === "W" ? 1 : 0),
                    firstInn: !(
                      prev.team1Wicket + (thisBall === "W" ? 1 : 0) ===
                      10
                    ),
                  }
                : {
                    ...prev,
                    team2Score:
                      prev.team2Score +
                      (thisBall !== "W" ? Number(thisBall) : 0),
                    lastBall: thisBall,
                    team2Wicket: prev.team2Wicket + (thisBall === "W" ? 1 : 0),
                  };
            });
          }}
        >
          Play
        </Button>
        <div>Last Ball: {state.lastBall ?? ""}</div>
      </div>
    </ProtectedRoute>
  );
};

export default CricketGame;
