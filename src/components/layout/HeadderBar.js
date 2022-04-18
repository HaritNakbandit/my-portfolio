import React, { useState, useContext } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../theme/Theme'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const AppBar = styled(MuiAppBar)(({ theme, ...props }) => {
  return {
    backgroundColor: props.trigger ? theme.palette.background.default : "transparent"
  };
});

const MenuLabel = styled.a(({ theme, ...props }) => {
  return {
    color: props.trigger ? theme.palette.text.primary : "#fff",
    fontSize: "20px",
    fontWeight: "500",
    margin: "0",
    textDecoration: "none",
  };
});

const MenuMobileLabel = styled(MenuLabel)(({ theme }) => {
  return {
    color: `${theme.palette.text.primary} !important`
  };
});

const HeadderBar = (props) => {
  const { window } = props;

  const [isDrawer, setIsDrawer] = useState(false);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);


  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const onIsDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawer(open);
  };

  const menuList = [
    {
      name: "Overview",
      link: "#overview",
    },
    {
      name: "Project",
      link: "#project",
    },
    {
      name: "Contact",
      link: "#contact",
    }
  ]



  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' ? 'auto' : 250 }}
      role="presentation"
      onClick={onIsDrawer(false)}
      onKeyDown={onIsDrawer(false)}
    >
      <List>
        {menuList.map((item, index) => (
          <ListItem button key={index} >
            <ListItemText >
              <MenuMobileLabel href={item.link}>{item.name}</MenuMobileLabel>
            </ListItemText >
          </ListItem>
        ))}
        <ListItem button onClick={colorMode.toggleColorMode}>
          <ListItemText >
            <IconButton sx={{ color: theme.palette.text.primary }} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <MenuMobileLabel>{theme.palette.mode === 'dark' ? 'Light' : 'Dark'}</MenuMobileLabel>
          </ListItemText >
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <ElevationScroll trigger={trigger ? trigger.toString() : undefined}>
        <AppBar trigger={trigger ? trigger.toString() : undefined}>
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "row", gap: "3rem", alignItems: "baseline" }}>
              {menuList.map((item, index) => (
                <MenuLabel key={index} trigger={trigger} href={item.link}>{item.name}</MenuLabel>
              ))}
              <IconButton sx={{ color: trigger ? theme.palette.text.primary : "#fff" }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
            <IconButton
              edge="end"
              onClick={onIsDrawer(true)}
              sx={{ display: { xs: "flex", md: "none" }, color: "black" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top" />
      {/* ScrollTop */}
      <ScrollTop trigger={trigger}>
        <Fab color="primary" size="small" aria-label="scroll back to top" sx={{
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
        }}>
          <KeyboardArrowUpIcon sx={{ color: theme.palette.text.secondary }} />
        </Fab>
      </ScrollTop>
      {/* Drawer */}
      <Drawer
        anchor={"top"}
        open={isDrawer}
        onClose={onIsDrawer(false)}
      >
        {list("top")}
      </Drawer>
    </>
  );

}



const ElevationScroll = (props) => {
  const { children, trigger } = props;

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const ScrollTop = (props) => {
  const { children, trigger } = props;

  const onClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={onClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default HeadderBar;
