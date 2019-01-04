import * as React from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { LayersProps } from './layers.types';
import { layersStyles } from './layers.styles';
import { FaGripVertical } from 'react-icons/fa';
import { isSelectedCard } from '../../reducers/selection-reducer';
import { Colors } from '../../styles/styles';

export const Layers: React.SFC<LayersProps> = props => {

  const reverseIndex = (index: number): number => props.cards.length - 1 - index;

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    props.reorderCard(props.cards[reverseIndex(result.source.index)].id, reverseIndex(result.destination.index));
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div className={layersStyles.root} ref={provided.innerRef}>
            {
              props.cards.slice().reverse().map((card, index) =>
                <Draggable key={card.id} draggableId={card.id} index={index}>
                  {(provided2, snapshot2) => (
                    <div className={layersStyles.layer}
                      ref={provided2.innerRef}
                      {...provided2.draggableProps}
                      {...provided2.dragHandleProps}
                      style={{
                        ...provided2.draggableProps.style as any,
                        backgroundColor: isSelectedCard(props.selectedItems, card) ? Colors.HIGHLIGHT : undefined,
                        color: isSelectedCard(props.selectedItems, card) ? 'white' : undefined,
                        outline: props.hoveredCardId === card.id || isSelectedCard(props.selectedItems, card) ? `1px solid ${Colors.HIGHLIGHT}` : 'none',
                      }}
                      onMouseEnter={() => props.mouseEnterCard(card.id)}
                      onMouseLeave={() => props.mouseLeaveCard()}
                    >
                      <FaGripVertical className="icon" />
                      <span style={{fontWeight: props.hoveredCardId === card.id && isSelectedCard(props.selectedItems, card) ? 900 : undefined}} className='text'>{card.text}</span>
                    </div>
                  )}
                </Draggable>
              )
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}