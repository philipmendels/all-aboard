import { connect } from "react-redux";
import { MainMenuDispatchProps } from "./main-menu.types";
import { ActionCreators } from "redux-undo";
import { MainMenu } from "./main-menu";

const {undo, redo} = ActionCreators;

const mapDispatchToProps:MainMenuDispatchProps = {
  undo,
  redo,
};

export const MainMenuContainer = connect(null, mapDispatchToProps)(MainMenu);