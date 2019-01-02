import { connect } from "react-redux";
import { LayersDispatchProps, LayersStateProps } from "./layers.types";
import { BoardState } from "../../models/board";
import { getAllCards } from "../../reducers/cards-reducer";
import { AppAction } from "../../actions/actions";
import { bindActionCreators, Dispatch } from "redux";
import { reorderCard } from "../../actions/action-creators";
import { Layers } from "./layers";

const mapStateToProps = (state: BoardState): LayersStateProps => ({
  selectedItems: state.selection.items,
  cards: getAllCards(state.cards)
});

const mapDispatchToProps = (dispatch: Dispatch<AppAction>): LayersDispatchProps => {
  return bindActionCreators({reorderCard}, dispatch);
};

export const LayersContainer = connect(mapStateToProps, mapDispatchToProps)(Layers);