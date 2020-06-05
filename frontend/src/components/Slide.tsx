import React, { FC } from "react";
import { connect } from "react-redux";

import { ApplicationState } from "../store";
import { Hero } from "../store/ducks/heroes/types";

interface StateProps {
  hero: Hero;
}

type Props = StateProps;

const Slide: FC<Props> = ({ hero }) => {
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
            // border: "1px #000 solid",
            backgroundImage: `url(${hero.imgSrc})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            transition: "all 1s ease 0s",
          }}
        ></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  hero: state.hero.data,
});

export default connect(mapStateToProps)(Slide);
