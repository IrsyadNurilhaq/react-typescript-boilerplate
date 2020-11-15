import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import RootState from "../reducers";
import epics from "../epics";
import { composeWithDevTools } from "redux-devtools-extension";

const epicMiddleware = createEpicMiddleware();

const store =
  process.env.NODE_ENV === "development"
    ? createStore(
        RootState,
        composeWithDevTools(compose(applyMiddleware(epicMiddleware)))
      )
    : createStore(RootState, compose(applyMiddleware(epicMiddleware)));

epicMiddleware.run(epics);

export default store;
