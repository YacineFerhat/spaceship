import { FC } from "react";

interface Props {
  index: number;
  elements: number;
  CurrentX: number;
  CurrentY: number;
  obstacles: Obstacle[];
}

interface Obstacle {
  x: number;
  y: number;
}
export const Box: FC<Props> = ({
  index,
  elements,
  CurrentX,
  CurrentY,
  obstacles,
}) => {
  const y = index % elements;
  const x = Math.floor(index / elements);
  const obstacle = obstacles.some((element) => {
    if (element.x === x && element.y === y) {
      return true;
    }
    return false;
  });
  return (
    <div
      style={{
        backgroundColor: obstacle ? "black" : "",
        border: "1.5px solid #E8E8E8",
        borderRadius: "2px",
        height: 60,
        width: 60,
        fontWeight: 700,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `rotate(${-270}deg)`,
      }}
    >
      {CurrentX === x && CurrentY === y && "X"}
    </div>
  );
};

//
//
