import { connect } from "react-redux";
import { MainMenuDispatchProps, MainMenuStateProps } from "./main-menu.types";
import { ActionCreators } from "redux-undo";
import { MainMenu } from "./main-menu";
import { BoardState } from "../../models/board";

const {undo, redo} = ActionCreators;

const mapStateToProps = (state:BoardState):MainMenuStateProps => ({
  canUndo: state.cards.past.length > 0,
  canRedo: state.cards.future.length > 0
});


const mapDispatchToProps:MainMenuDispatchProps = {
  undo,
  redo,
};

export const MainMenuContainer = connect(mapStateToProps, mapDispatchToProps)(MainMenu);