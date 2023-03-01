import React, { useReducer } from "react";
import { initialState } from "./reducers/index";
import reducer from "./reducers/index";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import {
  addOne,
  reset,
  applyNumber,
  islem,
  memoryPlus,
  memoryR,
  memoryC,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => {
                  dispatch(memoryPlus());
                }}
              />
              <CalcButton
                value={"MR"}
                onClick={() => {
                  dispatch(memoryR());
                }}
              />
              <CalcButton
                value={"MC"}
                onClick={() => {
                  dispatch(memoryC());
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={(event) => {
                  dispatch(applyNumber(Number(event.target.value)));
                }}
              />
              <CalcButton
                value={2}
                onClick={(event) => {
                  dispatch(applyNumber(Number(event.target.value)));
                }}
              />
              <CalcButton
                value={3}
                onClick={(event) => {
                  dispatch(applyNumber(Number(event.target.value)));
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={(event) => {
                  dispatch(applyNumber(Number(event.target.value)));
                }}
              />
              <CalcButton
                value={5}
                onClick={(event) => {
                  dispatch(applyNumber(Number(event.target.value)));
                }}
              />
              <CalcButton
                value={6}
                onClick={(event) => {
                  dispatch(applyNumber(Number(event.target.value)));
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={(event) => {
                  dispatch(applyNumber(Number(event.target.value)));
                }}
              />
              <CalcButton
                value={8}
                onClick={(event) => {
                  dispatch(applyNumber(Number(event.target.value)));
                }}
              />
              <CalcButton
                value={9}
                onClick={(event) => {
                  dispatch(applyNumber(Number(event.target.value)));
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={(event) => {
                  dispatch(islem(event.target.value));
                }}
              />
              <CalcButton
                value={"*"}
                onClick={(event) => {
                  dispatch(islem(event.target.value));
                }}
              />
              <CalcButton
                value={"-"}
                onClick={(event) => {
                  dispatch(islem(event.target.value));
                }}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => {
                  dispatch(reset());
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
