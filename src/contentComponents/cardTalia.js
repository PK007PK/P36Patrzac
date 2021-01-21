import { render } from "react-dom";
import React, { Component } from "react";
import { Spring, animated } from "react-spring";
import { Gesture } from "react-with-gesture";

const pages = [
  "https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg",
];

class CardTalia extends Component {
  gone = {}; // used for tracking of removed cards - not using state as we're updating during render

  calculateX(index, down, xDir, xDelta) {
    if (this.gone[index]) {
      // calculate a position off-screen & use x direction to decide on which side of screen
      return (200 + window.innerWidth) * (xDir < 0 ? -1 : 1);
    } else {
      // track cursor if touched
      return down ? xDelta : 0;
    }
  }

  render() {
    return pages.map(
      (url, index) =>
        !this.gone[index] && (
          <Gesture key={index}>
            {({ down, delta: [xDelta], direction: [xDir], velocity }) => {
              // Attention! Order matters - first check if gone than calculate x position
              if (!down && velocity > 1.5 && !this.gone[index]) {
                this.gone[index] = true;
              }

              const x = this.calculateX(index, down, xDir, xDelta);
              return (
                <Spring
                  native
                  to={{ x }}
                  immediate={down}
                  config={{ friction: 50, tension: 500 }}
                >
                  {({ x }) => (
                    <animated.div
                      style={{
                        transform: x.interpolate(
                          (x) => `translate3d(${x}px,${index * -4}px,0)`
                        ),
                      }}
                    >
                      <animated.div
                        style={{ backgroundImage: `url(${url})` }}
                      />
                    </animated.div>
                  )}
                </Spring>
              );
            }}
          </Gesture>
        )
    );
  }
}

export default CardTalia;
