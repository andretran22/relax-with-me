import React, { useState } from "react";
import Player from "react-player";

const MainSounds = (props) => {
    let soundDict = props.soundStateDict;
    let play = soundDict["playing"];
    let volume = soundDict["volume"];
    let src = soundDict["import"];

  return (
    <div>
      <Player
        width="0"
        height="0"
        loop={true}
        playing={play}
        volume={volume}
        url={src}
      />
    </div>
  );
};
export default MainSounds;
