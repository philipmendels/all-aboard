import thunk, { ThunkDispatch } from "redux-thunk";
import { compose, applyMiddleware, createStore, StoreEnhancerStoreCreator } from "redux";
import { BoardReducer } from "./reducers/board-reducer";
import { BoardState } from "./models/board";
import { AppAction } from "./actions/actions";

const middleware = [
  thunk,
];

const enhancers: any[] = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension({
      actionsBlacklist: ["^MOVE_CARDS$", "^SCALE_CARDS$"]
    }));
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  BoardReducer,
  undefined,
  composedEnhancers as (...args: any[]) => StoreEnhancerStoreCreator<ThunkDispatch<BoardState,null,AppAction>>
);

export default store;