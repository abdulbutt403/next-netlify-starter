import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';

export default function MainListItems(props) {


  return(
  <div>
    <a href="/admin"><ListItem button className="item-list">
      <ListItemIcon>
        <DashboardIcon style={{color : "#FFF", transform : "translateX(13%)"}}/>
      </ListItemIcon >
      <p>Dashboard</p>
    </ListItem>
    </a>


    <a href="/admin" onClick={props.showMusicUpload}><ListItem button className="item-list">
      <ListItemIcon>
        <ListIcon style={{color : "#FFF", transform : "translateX(13%)"}}/>
      </ListItemIcon >
      <p>list Music</p>
    </ListItem>
    </a>
  
  </div>
)};
