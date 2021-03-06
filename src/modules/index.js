// 루트 리듀서 : 기존에 만들었던 리듀서들을 하나로 합쳐준다
import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
