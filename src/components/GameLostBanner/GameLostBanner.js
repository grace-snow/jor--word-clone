import React from "react";

import Banner from "../Banner/Banner";

function GameLostBanner({ answer, handleRestart }) {
  return (
    <Banner status='sad' action={handleRestart} actionText='Try again'>
      <p>
        <strong>Sorry, you lost</strong>. The correct answer was {answer}
      </p>
    </Banner>
  );
}

export default GameLostBanner;
