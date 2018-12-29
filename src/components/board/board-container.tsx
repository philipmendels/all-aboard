import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { BoardState } from '../../models/board';
import { BoardStateProps, BoardDispatchProps } from './board.types';
import { AppAction } from '../../actions/actions';
import { getAllCards } from '../../reducers/cards-reducer';
import * as BoardActionCreators from '../../actions/action-creators';
import { Board } from './board';

const mapStateToProps = (state: BoardState): BoardStateProps => ({
  selectedItems: state.selection.items,
  cards: getAllCards(state.cards)
});

const mapDispatchToProps = (dispatch: Dispatch<AppAction>): BoardDispatchProps => {
  return bindActionCreators(BoardActionCreators, dispatch);
  // return {
  //   // onAddCard: boundActionCreators.addCard,
  //   // onRemoveCards: boundActionCreators.removeCards,
  //   startMoveCards: boundActionCreators.startMoveCards,
  //   // onStartScaleCards: boundActionCreators.startScaleCards,
  //   moveCards: boundActionCreators.moveCards,
  //   // onScaleCards: boundActionCreators.scaleCards,
  //   selectCards: boundActionCreators.selectCards,
  //   deselectCard: boundActionCreators.deselectCard,
  //   clearSelection: boundActionCreators.clearSelection,
  //   // onReorder: boundActionCreators.reorderCard
  // }
}

export const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);