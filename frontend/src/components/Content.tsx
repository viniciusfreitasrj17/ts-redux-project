import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { ApplicationState } from "../store";
import { Hero } from "../store/ducks/heroes/types";
import * as HeroesActions from "../store/ducks/heroes/actions";

interface StateProps {
  heroes: Hero[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

const Content: FunctionComponent<Props> = ({ heroes, loadRequest }) => {
  useEffect(() => {
    loadRequest();
  });

  return (
    <div style={{ width: "50%", border: "1px green solid", height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Content</h1>
      <ul
        className="row col-md-8"
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {heroes.map((h) => (
          <li
            key={h.id}
            style={{
              padding: "1rem",
              textDecoration: "none",
              backgroundColor: "#8094e0",
              margin: "1rem .1rem",
            }}
            className="col-md-4"
          >
            <strong> {h.name} </strong>
            {/* <p> {h.imgSrc} </p> */}
            <hr />
            <button onClick={() => console.log(`Clicked hero ${h.name}`)}>
              OK
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  heroes: state.heroes.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(HeroesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Content);
