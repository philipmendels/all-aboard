import * as React from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { style } from "typestyle";
import { LayersProps } from './layers.types';

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
          <div className={layersComponentClass} ref={provided.innerRef}>
            {
              props.cards.slice().reverse().map((card, index) =>
                <Draggable key={card.id} draggableId={card.id} index={index}>
                  {(provided2, snapshot2) => (
                    <div className={layerClass}
                      ref={provided2.innerRef}
                      {...provided2.draggableProps}
                      {...provided2.dragHandleProps}
                      style={provided2.draggableProps.style as any}
                    >
                      <span className='text-icon'>T</span>
                      <span className='text'>{card.text}</span>
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

const layersComponentClass = style({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 1000,
  backgroundColor: '#f6f6f6',
  color: '#2c2c2c',
  fontSize: '12px',
  borderRight: '1px solid lightgray'
})

const layerClass = style({
  height: '30px',
  padding: '0 10px 0 10px',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  '$nest': {
    '&:hover': {
      backgroundColor: 'lightgray'
    },
    '.text-icon': {
      color: 'gray',
      fontSize: '14px',
      fontWeight: 'lighter',
      marginRight: '10px'
    },
    '.text': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  }
})