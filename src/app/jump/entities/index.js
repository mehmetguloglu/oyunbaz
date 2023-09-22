import Matter from "matter-js";
import Bird from "../../../components/jump/Bird";
import Obstacle from "../../../components/jump/Obstacle";
import Floor from "../../../components/jump/Floor";

import { Dimensions } from "react-native";
import { getPipeSizePosPair } from "../../../utils/random";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;

  world.gravity.y = 1.2;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9);
  return {
    physics: { engine, world },

    Bird: Bird(world, "green", { x: 50, y: 300 }, { height: 40, width: 40 }),

    ObstacleTop1: Obstacle(
      world,
      "ObstacleTop1",
      "#6b9091",
      pipeSizePosA.pipeTop.pos,
      pipeSizePosA.pipeTop.size
    ),
    ObstacleBottom1: Obstacle(
      world,
      "ObstacleBottom1",
      "#99cdcf",
      pipeSizePosA.pipeBottom.pos,
      pipeSizePosA.pipeBottom.size
    ),

    ObstacleTop2: Obstacle(
      world,
      "ObstacleTop2",
      "#6b9091",
      pipeSizePosB.pipeTop.pos,
      pipeSizePosB.pipeTop.size
    ),
    ObstacleBottom2: Obstacle(
      world,
      "ObstacleBottom2",
      "#99cdcf",
      pipeSizePosB.pipeBottom.pos,
      pipeSizePosB.pipeBottom.size
    ),

    Floor: Floor(
      world,
      "#6b9091",
      { x: windowWidth / 2, y: windowHeight },
      { height: 50, width: windowWidth }
    ),
  };
};
