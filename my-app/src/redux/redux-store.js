import createStore from "redux/src/createStore";
import {combineReducers} from "redux";
import CommentReducer from "./CommentMainPageReducer";
import TitlePageReducer from "./TitlePagesReducer";
import MenuItemInformationDesignReducer from "./MenuItemInformationDesign";
import MenuItemInformationRecordingReducer from "./MenuItemInformationRecording";
import MenuItemInformationReducer from "./MenuItemInformationReducer";
import MenuItemInformationVideoReducer from "./MenuItemInformationVideo";

let reducers = combineReducers({
    CommentariesForm: CommentReducer,
    TitlePage: TitlePageReducer,
    MenuDesign: MenuItemInformationDesignReducer,
    MenuRecording: MenuItemInformationRecordingReducer,
    MenuInformation: MenuItemInformationReducer,
    MenuVideo: MenuItemInformationVideoReducer
});


let store = createStore(reducers);

window.store = store;
export default store;