import React from 'react';
import {
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';

const Listen = ({props}) => (
    <List>
      <ListItem>
        <ListItemText primary={props.text.nama} secondary={props.text.completed} />
      </ListItem>
    </List>
);

export default Listen;