import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin-bottom:8px;
`


const TrelloCard = ({text, id, index, photo}) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <CardContainer 
          ref={provided.innerRef} 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          
            <Card >
              <CardContent>
                <Typography  gutterBottom> {text} </Typography>
                 <img src={photo} alt="Avatar"/>
              </CardContent>
            </Card>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default TrelloCard 
