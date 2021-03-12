import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Menu,
  Home,
  Person,
  Public,
  Business,
  Explore,
  Gavel,
  Share,
  Search,
  History,
  YouTube,
  LinkedIn,
  Instagram,
  Facebook,
} from '@material-ui/icons';
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Badge,
  Drawer,
  Divider,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Collapse,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
} from '@material-ui/core';
import clsx from 'clsx';
import Image from 'next/image';
import CollapsableListItem from 'components/CollapsableListItem';
import Link from 'components/Link'

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 20,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    marginTop: 5,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
  },
  copyright: {
    padding: 24,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
}));

export default function Layout({ children }) {

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(current => !current);
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline/>
        <AppBar position="fixed"
                className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              className={clsx(classes.menuButton)}
            >
              <Menu/>
            </IconButton>
            <div className={classes.title}>
              <Link href={'/'}>
              <Image src='/images/rental-port-logo.png' alt='RentalPort logo'
                     width="187" height='30'/>
              </Link>
            </div>
            <Button color="inherit" startIcon={<Person/>}>Prihlásenie</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          classes={{
            paper: clsx(classes.drawerPaper),
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <Image src="/images/material.png" alt="sidebar-logo" width="300"
                   height="168.75"/>
          </div>
          <Divider/>
          <List>
            <ListSubheader inset>Konto</ListSubheader>
            <ListItem button>
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Prihlásenie"/>
            </ListItem>
          </List>
          <Divider/>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Domov"/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Public/>
              </ListItemIcon>
              <ListItemText primary="Blog"/>
            </ListItem>
            <CollapsableListItem icon={<Business/>} title='Spoločnost'
                                 items={[{ name: 'O nás' }]}/>
          </List>
        </Drawer>
        <main className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
          <div className={classes.appBarSpacer}/>
          {children}
          <footer className={classes.footer}>
            <Grid container>
              <Grid item xs={12} className={classes.textAlignCenter}>
                <Image src='/images/rental-port-logo-blue.png'
                       alt='RentalPort logo'
                       width="187" height='30'/>
              </Grid>
              <Grid item xs={12} lg={3}>
                <List>
                  <CollapsableListItem icon={<Business/>} title='Spoločnost'
                                       items={[
                                         { name: 'O nás' },
                                         { name: 'Náš team' },
                                         { name: 'Kontaktné informácie' }]}
                                       defaultOpen/>
                </List>
              </Grid>
              <Grid item xs={12} lg={3}>
                <List>
                  <CollapsableListItem icon={<Explore/>}
                                       title='Užitočné informácie' items={[
                    { name: 'FAQ' },
                    { name: 'Akciové ponuky' },
                    { name: 'Affiliate program' }]} defaultOpen/>
                </List>
              </Grid>
              <Grid item xs={12} lg={3}>
                <List>
                  <CollapsableListItem icon={<Gavel/>} title='Právne informácie'
                                       items={[
                                         { name: 'Podmienky pre užívateľov' },
                                         { name: 'Podmienky GDPR' },
                                         { name: 'Nastavenie cookies' }]}
                                       defaultOpen/>
                </List>
              </Grid>
              <Grid item xs={12} lg={3}>
                <List>
                  <CollapsableListItem icon={<Share/>} title='Sledujte nás'
                                       items={[
                                         {
                                           name: 'Facebook',
                                           icon: <Facebook/>,
                                         },
                                         {
                                           name: 'Instagram',
                                           icon: <Instagram/>,
                                         },
                                         { name: 'Youtube', icon: <YouTube/> },
                                         {
                                           name: 'LinkedIn',
                                           icon: <LinkedIn/>,
                                         }]} defaultOpen/>
                </List>
              </Grid>
            </Grid>
          </footer>
          <Container className={classes.copyright}>
            <Typography variant="body2" color="textSecondary" align="center">
              Copyright © 2021 RentalPort.com, a.s. | Drieňová 27, Bratislava
              821
              01
              | IČO 52 339 530 | All rights reserved
            </Typography>
          </Container>
        </main>

      </div>
      <AppBar position="fixed" color="primary"
              style={{ top: 'auto', bottom: 0 }}>

        <BottomNavigation value={'home'}
                          showLabels
                          onChange={(newnav) => console.log('changed nav',
                            newnav)}>
          <BottomNavigationAction label="Domov" value="home" icon={<Home/>}/>
          <BottomNavigationAction label="Hľadať" value="search"
                                  icon={<Search/>}/>
          <BottomNavigationAction label="História" value="history"
                                  icon={<History/>}/>
          <BottomNavigationAction label="Prihlásenie" value="login"
                                  icon={<Person/>}/>
        </BottomNavigation>
      </AppBar>
    </>
  );
}