import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { ApplicationState } from "../store";
import { Hero } from "../store/ducks/heroes/types";
import { loadRequest, toggleRequest } from "../store/ducks/heroes/actions";

interface StateProps {
  heroes: Hero[];
}

interface DispatchProps {
  loadRequest(): void;
  toggleRequest(hero: Hero): void;
}

type Props = StateProps & DispatchProps;

const Content: FC<Props> = ({ heroes, loadRequest, toggleRequest }) => {
  useEffect(() => {
    loadRequest();
  });

  return (
    <div
      style={{ border: "1px green solid", height: "70vh", overflowY: "scroll" }}
    >
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
            <hr />
            <button onClick={() => toggleRequest(h)}>OK</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  heroes: state.heroes.data,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  loadRequest: bindActionCreators(loadRequest, dispatch),
  toggleRequest: bindActionCreators(toggleRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
