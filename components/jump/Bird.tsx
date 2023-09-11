import Matter from "matter-js";
import React, { useMemo, useRef } from "react";
import { View, Image, Animated, Easing } from "react-native";

const Bird = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;

  // First set up animation

  // Next, interpolate beginning and end values (in this case 0 and 1)

  return (
    <Animated.Image
      source={require("../../assets/jump/jumper.png")}
      style={{
        position: "absolute",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
      resizeMode="contain"
    />
  );
};

export default (world, color, pos, size) => {
  const initialBird = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      // isStatic: true,
      // inertia: Infinity, // setting inertia to infinty will prevent rotation upon collision
      // rotationSpeed: 31,
      label: "Bird",
    }
  );
  Matter.World.add(world, initialBird);
  // function updateRotation() {
  //   Matter.Body.setAngle(
  //     initialBird,
  //     initialBird.angle + initialBird.rotationSpeed
  //   );
  //   requestAnimationFrame(updateRotation);
  // }
  // window.requestAnimationFrame(updateRotation);
  return {
    body: initialBird,
    color,
    pos,
    renderer: <Bird />,
  };
};
