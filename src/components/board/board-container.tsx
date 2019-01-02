import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { BoardState } from '../../models/board';
import { BoardStateProps, BoardDispatchProps } from './board.types';
import { AppAction } from '../../actions/actions';
import { getAllCards } from '../../reducers/cards-reducer';
import { Board } from './board';
import { 
  moveCards, startMoveCards, addCard, removeCards, startScaleCards, 
  scaleCards, selectCards, deselectCard, clearSelection 
} from '../../actions/action-creators';

const mapStateToProps = (state: BoardState): BoardStateProps => ({
  selectedItems: state.selection.items,
  cards: getAllCards(state.cards)
});

const mapDispatchToProps = (dispatch: Dispatch<AppAction>): BoardDispatchProps => {
  return bindActionCreators({
    addCard, removeCards, startMoveCards, moveCards, 
    startScaleCards, scaleCards, selectCards, deselectCard, clearSelection,
  }, dispatch);
}

export const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);