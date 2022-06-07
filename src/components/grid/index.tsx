import { Box, Control } from "components";
import { useState, FC } from "react";
import { obstacles } from "data";

interface Props {
  elements: number;
}

export const Grid: FC<Props> = ({ elements }) => {
  const [obstaclesArray, setObstaclesArray] = useState<any>([]);
  const facings = ["N", "E", "S", "W"];
  const [facingIndex, setFacingIndex] = useState(0);
  const [positions, setPositions] = useState({
    x: 0,
    y: 0,
  });

  const handleObstacleArray = (obj: any) => {
    const populated = obstaclesArray.some((element: any) => {
      return element.x === obj.x && element.y === obj.y;
    });
    if (!populated) {
      setObstaclesArray([...obstaclesArray, obj]);
    }
  };
  const handleChangePositions = (position: string, value: number) => {
    setPositions((prevState) => ({
      ...prevState,
      [`${position}`]: value,
    }));
  };
  const handleChangeFacing = (state: number) => {
    setFacingIndex(state);
  };
  console.log(obstaclesArray);
  return (
    <div>
      <div
        style={{
          display: "grid",
          transform: `rotate(${270}deg)`,
          gridTemplateRows: `repeat(${elements}, 1fr)`,
          gridTemplateColumns: `repeat(${elements}, 1fr)`,
          marginBottom: "12px",
        }}
      >
        {Array.from({ length: elements * elements }, (_, index) => (
          <Box
            obstacles={obstacles}
            CurrentX={positions.x}
            CurrentY={positions.y}
            key={index}
            index={index}
            elements={elements}
          />
        ))}
      </div>
      Starting point : (0, 0, N)
      <div
        style={{
          marginTop: "12px",
          marginBottom: "12px",
        }}
      >
        Current position : ({positions.x},{positions.y},{facings[facingIndex]} )
      </div>
      {obstaclesArray.length > 0 && (
        <div>
          Obstacles at :
          <ul>
            {obstaclesArray.map((obj: any, index: number) => (
              <li key={index}>{`X: ${obj.x}, Y: ${obj.y}`}</li>
            ))}
          </ul>
        </div>
      )}
      <Control
        handleObstacleArray={handleObstacleArray}
        positions={positions}
        handleChangePositions={handleChangePositions}
        handleChangeFacing={handleChangeFacing}
        elements={elements}
        facingIndex={facingIndex}
      />
    </div>
  );
};
