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
  }, []);

  return (
    <div>
      <ul>
        {heroes.map((h) => (
          <li>
            <h1> {h.name} </h1>
            <p> {h.imgSrc} </p>
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
