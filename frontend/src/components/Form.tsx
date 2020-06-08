import React, { FC, useState, useEffect, FormEvent } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { ApplicationState } from "../store";
import { storeRequest, loadRequest } from "../store/ducks/heroes/actions";
import { Hero } from "../store/ducks/heroes/types";

interface StateProps {
  heroes: Hero[];
}

interface DispatchProps {
  loadRequest(): void;
  storeRequest(hero: Hero): void;
}

type Props = DispatchProps & StateProps;

const Form: FC<Props> = ({ storeRequest, heroes }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [leng, setLeng] = useState(heroes.length + 1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    storeRequest({ id: leng, name: name, imgSrc: img });

    setName("");
    setImg("");
    setLeng(leng + 1);
  };

  useEffect(() => {
    loadRequest();
  }, [heroes]);

  return (
    <div
      style={{
        border: "1px green solid",
        height: "30vh",
        padding: "1rem 2rem",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Content</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", alignItems: "center" }}
      >
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ padding: "6px" }}>
          <label htmlFor="">Image Url: </label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  heroes: state.heroes.data,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  loadRequest: bindActionCreators(loadRequest, dispatch),
  storeRequest: bindActionCreators(storeRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
