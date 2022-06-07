import { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
}

const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const title = {
  fontSize: "20px",
};
const subTitle = {
  fontSize: "16px",
  margin: "16px 0px",
};

export const Container: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1 style={title}>Space ship</h1>
      <h2 style={subTitle}>Let's explore this planet</h2>
      {children}
    </div>
  );
};
