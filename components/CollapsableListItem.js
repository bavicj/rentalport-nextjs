import { useState } from 'react';
import {
  Collapse, List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function CollapsableListItem({
                                              defaultOpen,
                                              title,
                                              items,
                                              icon,
                                            }) {

  const [open, setOpen] = useState(defaultOpen);

  const classes = useStyles();

  return (
    <>
      <ListItem button
                onClick={() => setOpen(current => !current)}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={title}/>
        {open ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map(item =>
            <ListItem key={item.name} button className={classes.nested}>
              {item.icon &&
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              }
              <ListItemText primary={item.name}/>
            </ListItem>,
          )}
        </List>
      </Collapse>
    </>
  );
}

CollapsableListItem.defaultProps = {
  defaultOpen: false,
};