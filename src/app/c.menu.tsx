import { useState } from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function NavMenu({ isDarwerOpen, toggleDrawer }: { isDarwerOpen?: boolean; toggleDrawer?: () => void }) {
  const [menuClickDom, setMenuClickDom] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const atClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (isDarwerOpen && toggleDrawer) {
      toggleDrawer();
    }
    if (openMenu) {
      setOpenMenu(false);
    }
  };

  const handleOpenMenu = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setMenuClickDom(e.currentTarget);
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleLogOut = () => {
    setOpenMenu(false);
    console.log('logout');
  };

  return (
    <>
      <Stack component="nav" spacing={0} direction={{ sm: 'column', md: 'row' }}>
        <Link className="nav-link" href="/" onClick={atClick}>
          <Typography component="span" color="white">
            客房旅宿
          </Typography>
        </Link>
        <Link className="nav-link" href="/login" onClick={atClick}>
          <Typography component="span" color="white">
            會員登入
          </Typography>
        </Link>
        <Box
          id="menu-basic"
          className="nav-link"
          component="a"
          onClick={handleOpenMenu}
          aria-controls={openMenu ? 'member-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? 'true' : undefined}
          sx={{ display: { sm: 'none', md: 'flex' } }}>
          <Typography component="i" color="white" sx={{ padding: '0px 6px 0px 0px' }}>
            <PersonOutlineIcon />
          </Typography>
          <Typography component="span" color="white">
            {`Jessica`}
          </Typography>
        </Box>
        <Box sx={{ display: { sm: 'block', md: 'none' } }}>
          <Link className="nav-link" href="/member" onClick={atClick}>
            <Typography component="span" color="white">
              我的帳戶
            </Typography>
          </Link>
        </Box>
        <Link className="nav-link active" href="/roomBooking" onClick={atClick}>
          <Typography component="span" color="white">
            立即訂房
          </Typography>
        </Link>
      </Stack>
      <Menu
        id="member-menu"
        open={openMenu}
        onClose={handleCloseMenu}
        anchorEl={menuClickDom}
        MenuListProps={{
          'aria-labelledby': 'menu-basic',
        }}>
        <Link className="nav-link" href="/member" onClick={atClick}>
          <Typography component="span">我的帳戶</Typography>
        </Link>
        <MenuItem onClick={handleLogOut}>登出</MenuItem>
      </Menu>
    </>
  );
}
