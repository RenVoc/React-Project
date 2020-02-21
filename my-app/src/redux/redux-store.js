import createStore from "redux/src/createStore";
import {combineReducers} from "redux";
import CommentReducer from "./CommentMainPageReducer";
import TitlePageReducer from "./TitlePagesReducer";
import MenuReducer from "./MenuReducer";

let reducers = combineReducers({
    CommentariesForm: CommentReducer,
    TitlePage: TitlePageReducer,
    Menu: MenuReducer,
});


let store = createStore(reducers);

window.store = store;
export default store;