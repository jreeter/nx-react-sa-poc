import logo from '../../assets/visio-logo.png';
import {
  Home,
  AttachMoney,
  Add,
  Notifications,
  QuestionMark,
  Person,
  Settings,
} from '@mui/icons-material';

import { Badge, Box, IconButton, Link } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Logo = () => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        padding: '5px',
        borderRadius: '25px',
        maxHeight: '50px',
      }}
    >
      <img
        alt="as"
        src={logo}
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      />
    </Box>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavItem = (props: any) => {
  return (
    <div style={{ padding: '10px', marginLeft: '10px' }}>{props.children}</div>
  );
};

const TopNav = () => {
  return (
    <Box
      style={{
        width: '70%',
        display: 'flex',
        justifyContent: 'left',
        backgroundColor: 'white',
        padding: '5px',
        borderRadius: '25px',
        maxHeight: '50px',
      }}
    >
      <NavItem>
        <Home style={{ marginTop: '-5px' }} />
        <Link underline="none" color="black" component={RouterLink} to="/deals">
          My Deals
        </Link>
      </NavItem>
      <NavItem>
        <AttachMoney style={{ marginTop: '-5px' }} />
        <Link
          underline="none"
          color="black"
          component={RouterLink}
          to="/assets"
        >
          Assets
        </Link>
      </NavItem>
      <NavItem>
        <Add style={{ marginTop: '-5px' }} />
        <Link
          underline="none"
          color="black"
          component={RouterLink}
          to="/deals/start"
        >
          Start New Deal
        </Link>
      </NavItem>
    </Box>
  );
};

const UserNav = () => {
  const [read, setRead] = useState(0);

  useEffect(() => {
    //mock data
    setRead(13);
  }, []);

  return (
    <Box
      style={{
        width: '15%',
        display: 'flex',
        justifyContent: 'right',
        backgroundColor: 'white',
        padding: '5px',
        borderRadius: '25px',
        maxHeight: '50px',
      }}
    >
      <IconButton aria-label="delete">
        <Badge badgeContent={read} color="primary">
          <Notifications />
        </Badge>
      </IconButton>
      <IconButton aria-label="delete">
        <QuestionMark />
      </IconButton>
      <IconButton aria-label="delete">
        <Settings />
      </IconButton>
      <IconButton aria-label="delete">
        <Person />
      </IconButton>
    </Box>
  );
};

const Header = () => {
  const headerStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  };

  return (
    <Box style={headerStyle}>
      <Logo />
      <TopNav />
      <UserNav />
    </Box>
  );
};

export default Header;
