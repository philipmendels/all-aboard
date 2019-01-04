import { connect } from "react-redux";
import { LayersDispatchProps, LayersStateProps } from "./layers.types";
import { BoardState } from "../../models/board";
import { getAllCards } from "../../reducers/cards-reducer";
import { AppAction } from "../../actions/actions";
import { bindActionCreators, Dispatch } from "redux";
import { 
  reorderCard, mouseEnterCard, mouseLeaveCard, selectCards, deselectCard, clearSelection } from "../../actions/action-creators";
import { Layers } from "./layers";

const mapStateToProps = (state: BoardState): LayersStateProps => ({
  selectedItems: state.selection.items,
  cards: getAllCards(state.cards.present),
  hoveredCardId: state.ui.hoveredCardId
});

const mapDispatchToProps = (dispatch: Dispatch<AppAction>): LayersDispatchProps => {
  return bindActionCreators({ reorderCard, mouseEnterCard, mouseLeaveCard, selectCards, deselectCard, clearSelection }, dispatch);
};

export const LayersContainer = connect(mapStateToProps, mapDispatchToProps)(Layers);