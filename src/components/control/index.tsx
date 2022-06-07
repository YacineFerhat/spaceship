import { FC } from "react";
import { obstacles } from "data";

interface Props {
  elements: number;
  handleChangePositions: any;
  handleChangeFacing: any;
  facingIndex: number;
  positions: Position;
  handleObstacleArray: any;
}
interface Position {
  x: number;
  y: number;
}

const button = {
  backgroundColor: "#D3D3D3",
  width: 40,
  padding: 8,
  borderRadius: 10,
  fontWeight: 700,
  margin: "0px 4px",
  cursor: "pointer",
};

export const Control: FC<Props> = ({
  elements,
  handleChangeFacing,
  facingIndex,
  handleChangePositions,
  positions,
  handleObstacleArray,
}) => {
  const facings = ["N", "E", "S", "W"];

  const isObstacle = (x: number, y: number) => {
    return obstacles.some((element) => {
      if (element.x === x && element.y === y) {
        handleObstacleArray({ x, y });
        return true;
      }
      return false;
    });
  };

  const forwardY = () => {
    if (positions.y !== elements - 1) {
      handleChangePositions(
        "y",
        isObstacle(positions.x, positions.y + 1) ? positions.y : positions.y + 1
      );
    } else {
      resetY();
    }
  };

  const backwardY = () => {
    if (positions.y !== 0) {
      handleChangePositions(
        "y",
        isObstacle(positions.x, positions.y - 1) ? positions.y : positions.y - 1
      );
    } else {
      handleChangePositions("y", elements - 1);
    }
  };

  const forwardX = () => {
    if (positions.x !== elements - 1) {
      handleChangePositions(
        "x",
        isObstacle(positions.x + 1, positions.y) ? positions.x : positions.x + 1
      );
    } else {
      resetX();
    }
  };

  const backwardX = () => {
    if (positions.x !== 0) {
      handleChangePositions(
        "x",
        isObstacle(positions.x - 1, positions.y) ? positions.x : positions.x - 1
      );
    } else {
      handleChangePositions("x", elements - 1);
    }
  };

  const handleMovement = (direction: string) => {
    if (facingIndex === 0) {
      if (direction === "F") {
        forwardY();
      }
      if (direction === "B") {
        backwardY();
      }
    }

    if (facingIndex === 1) {
      if (direction === "F") {
        forwardX();
      }
      if (direction === "B") {
        backwardX();
      }
    }

    if (facingIndex === 2) {
      if (direction === "F") {
        backwardY();
      }
      if (direction === "B") {
        forwardY();
      }
    }

    if (facingIndex === 3) {
      if (direction === "F") {
        backwardX();
      }
      if (direction === "B") {
        forwardX();
      }
    }
  };

  const handleRotation = (rotate: string) => {
    if (rotate === "R") {
      if (facingIndex === facings.length - 1) {
        return handleChangeFacing(0);
      }
      return handleChangeFacing(facingIndex + 1);
    }
    if (rotate === "L") {
      if (facingIndex === 0) {
        return handleChangeFacing(facings.length - 1);
      }
      return handleChangeFacing(facingIndex - 1);
    }
  };

  const resetX = () => {
    handleChangePositions("x", 0);
  };

  const resetY = () => {
    handleChangePositions("y", 0);
  };

  return (
    <div
      style={{
        marginTop: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{ width: "100%", justifyContent: "center", display: "flex" }}
        >
          <button onClick={() => handleMovement("F")} style={button}>
            F
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            justifyContent: "center",
            marginTop: 8,
          }}
        >
          <button onClick={() => handleRotation("L")} style={button}>
            L
          </button>
          <button onClick={() => handleMovement("B")} style={button}>
            B
          </button>
          <button onClick={() => handleRotation("R")} style={button}>
            R
          </button>
        </div>
      </div>
    </div>
  );
};
