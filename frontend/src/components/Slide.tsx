import React from "react";

const Slide = () => {
  return (
    <div style={{ width: "50%", border: "1px red solid", height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Slide</h1>
      <div
        className="imgContent"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <div
          style={{
            height: "300px",
            width: "300px",
            border: "1px #000 solid",
            // margin: "5% auto",
            // backgroundColor: activeImage.content,
            transition: "all 1s ease 0s",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Slide;
