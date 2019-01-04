import * as React from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { LayersProps } from './layers.types';
import { layersStyles } from './layers.styles';
import { FaGripVertical } from 'react-icons/fa';
import { isSelectedCard } from '../../reducers/selection-reducer';
import { Colors } from '../../styles/styles';
import { isSelectionKeyDown, handleSelection } from '../../util/util';

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
          <div
            className={layersStyles.root}
            ref={provided.innerRef}
            onMouseDown={() => Object.keys(props.selectedItems).length && props.clearSelection()}
          >
            {
              props.cards.slice().reverse().map((card, index) =>
                <Draggable key={card.id} draggableId={card.id} index={index}>
                  {(provided2, snapshot2) => {

                    const isHovered = props.hoveredCardId === card.id;
                    const isSelected = isSelectedCard(props.selectedItems, card);

                    return (
                      <div
                        className={layersStyles.layer}
                        ref={provided2.innerRef}
                        {...provided2.draggableProps}
                        {...provided2.dragHandleProps}
                        style={{
                          ...provided2.draggableProps.style as any,
                          backgroundColor: isSelected ? Colors.HIGHLIGHT : undefined,
                          color: isSelected ? 'white' : undefined,
                          outline: isHovered || isSelected ? `1px solid ${Colors.HIGHLIGHT}` : 'none',
                        }}
                        onMouseDown={(e) => {
                          e.stopPropagation();
                          handleSelection(
                            e, card, isSelected, props.clearSelection, 
                            () => props.selectCards([card.id]), 
                            () => props.deselectCard(card.id)
                          );
                          provided2.dragHandleProps && provided2.dragHandleProps.onMouseDown(e);
                        }}
                        onMouseEnter={() => props.mouseEnterCard(card.id)}
                        onMouseLeave={() => props.mouseLeaveCard()}
                      >
                        <FaGripVertical className="icon" />
                        <span
                          style={{ fontWeight: isHovered && isSelected ? 900 : undefined }}
                          className='text'>{card.text}
                        </span>
                      </div>
                    );
                  }}
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

