export const q2a = (input: string): number => {
  const lines = input.split("\n");
  const opponentPlays = {
    A: "rock",
    B: "paper",
    C: "scissors",
  };
  const playerPlays = {
    X: "rock",
    Y: "paper",
    Z: "scissors",
  };
  const playedPoints = {
    rock: 1,
    paper: 2,
    scissors: 3,
  };

  const playerWins = (
    player: string,
    opponent: string
  ): "win" | "draw" | "loss" => {
    if (player === opponent) {
      return "draw";
    }
    if (player === "rock") {
      return opponent === "scissors" ? "win" : "loss";
    }
    if (player === "paper") {
      return opponent === "rock" ? "win" : "loss";
    }
    if (player === "scissors") {
      return opponent === "paper" ? "win" : "loss";
    }
    throw new Error("Invalid play");
  };

  let totalScore = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const [opponent, player] = line.split(" ");
    const roundStatus = playerWins(
      playerPlays[player],
      opponentPlays[opponent]
    );
    totalScore += playedPoints[playerPlays[player]];
    totalScore += roundStatus === "win" ? 6 : roundStatus === "draw" ? 3 : 0;
  }

  return totalScore;
};

type RoundStatus = "win" | "draw" | "loss";
type Plays = "rock" | "paper" | "scissors";

export const q2b = (input: string): number => {
  const lines = input.split("\n");
  const winstatus = {
    X: "loss",
    Y: "draw",
    Z: "win",
  };

  const wincalc = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock",
  };

  const opponentPlays = {
    A: "rock",
    B: "paper",
    C: "scissors",
  };

  const playerWins = (
    player: string,
    opponent: string
  ): "win" | "draw" | "loss" => {
    if (player === opponent) {
      return "draw";
    }
    if (player === "rock") {
      return opponent === "scissors" ? "win" : "loss";
    }
    if (player === "paper") {
      return opponent === "rock" ? "win" : "loss";
    }
    if (player === "scissors") {
      return opponent === "paper" ? "win" : "loss";
    }
    console.log(player, opponent);
    throw new Error("Invalid play");
  };
  const playedPoints = {
    rock: 1,
    paper: 2,
    scissors: 3,
  };

  const getMyMove = (opponent: string, desiredResult: string): string => {
    if (desiredResult === "draw") {
      return opponent;
    } else if (desiredResult === "win") {
      return wincalc[opponent];
    } else {
      return wincalc[wincalc[opponent]];
    }
  };

  let totalScore = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const [opponent, result] = line.split(" ");
    const player = getMyMove(opponentPlays[opponent], winstatus[result]);
    // const roundStatus = playerWins(player, opponentPlays[opponent]);
    const roundStatus = playerWins(player, opponentPlays[opponent]);
    totalScore += roundStatus === "win" ? 6 : roundStatus === "draw" ? 3 : 0;
    totalScore += playedPoints[player];
  }

  return totalScore;
};
