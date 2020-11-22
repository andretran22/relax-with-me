import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Image from "react-bootstrap/Image";
import "./MyParallax.css";


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans0 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;


const trans1 = (x, y) => `translate3d(${x / 5 }px, ${y / 4}px, 0)`;
const trans2 = (x, y) => `translate3d(${x / 4 - 70}px, ${y / 5 - 130}px, 0)`;
const trans3 = (x, y) => `translate3d(${x / 5 - 20}px, ${y / 4 - 180}px, 0)`;
const trans4 = (x, y) => `translate3d(${x / 4 + 20}px, ${y / 5 - 180}px, 0)`;
const trans5 = (x, y) => `translate3d(${x / 5 + 70}px, ${y / 4 - 130}px, 0)`;
const trans6 = (x, y) => `translate3d(${x / 4 }px, ${y / 5}px, 0)`;

const trans7 = (x, y) => `translate3d(${x / 5 }px, ${y / 4 + 20}px, 0)`;
const trans8  = (x, y) => `translate3d(${x / 4 - 70}px, ${y / 5 + 150}px, 0)`;
const trans9  = (x, y) => `translate3d(${x / 5 - 20}px, ${y / 4 + 200}px, 0)`;
const trans10 = (x, y) => `translate3d(${x / 4 + 20}px, ${y / 5 + 200}px, 0)`;
const trans11 = (x, y) => `translate3d(${x / 5 + 70}px, ${y / 4 + 150}px, 0)`;
const trans12 = (x, y) => `translate3d(${x / 4 }px, ${y / 5 + 20}px, 0)`;

const transFunctions = [
  trans1,
  trans2,
  trans3,
  trans4,
  trans5,
  trans6,
  trans7,
  trans8,
  trans9,
  trans10,
  trans11,
  trans12
];

const MyParallax = (my_props) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 300, friction: 50 },
  }));

  const [soundState, setSoundState] = useState([]);
  const [playlistImage, setPlaylistImage] = useState(null);

  useEffect(() => {
    if (my_props.parallaxSounds != null){
      setSoundState([...my_props.parallaxSounds]);
    }
  }, [my_props.updateParallax]);

  useEffect(()=>{
    setPlaylistImage(my_props.playlistImage);
  }, [my_props.playlistImage])

  const makeSoundParallax = (sounds) => {
    // console.log("hello")
    console.log(sounds[0])
    return sounds.map((soundDict, index) => {
      
      if (soundDict["playing"]) {
        return (
          <animated.div
            key={index}
            className="card1"
            style={{ transform: props.xy.interpolate(transFunctions[index]) }}
          >
            <Image src={soundDict["image"]} fluid />
          </animated.div>
        );
      }
    });
  };

  return (
    <div
      className="parallax-container"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >

      {/* playlist background */}
      <animated.div
        className="main-parallax-card"
        style={{ transform: props.xy.interpolate(trans0) }}
      >
        <Image src={playlistImage} fluid />
      </animated.div>

      {/* sound images */}
      {makeSoundParallax(soundState)}

    </div>
  );
};

export default MyParallax;
