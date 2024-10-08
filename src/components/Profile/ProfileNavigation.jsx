import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const menu = [
  { title: 'Orders', icons: <ShoppingBagIcon /> },
  { title: 'Favorites', icons: <FavoriteIcon /> },
  { title: 'Address', icons: <HomeIcon /> },
  { title: 'Payments', icons: <AccountBalanceWalletIcon /> },
  { title: 'Notification', icons: <NotificationsActiveIcon /> },
  { title: 'Events', icons: <EventIcon /> },
  { title: 'Logout', icons: <LogoutIcon /> },
];

const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate(`/my-profile/${item.title.toLowerCase()}`);
  };

  return (
    <div>
      <Drawer
        onClose={handleClose}
        variant={isSmallScreen ? 'temporary' : 'permanent'}
        open={isSmallScreen ? open : true}
        anchor="left"
        sx={{ zIndex: -1, position: 'sticky' }}
      >
        <div className="w-[50vw] lg:w-[20vw] h-[90vh] flex flex-col justify-center text-xl gap-8 mt-20">
          {menu.map((item, i) => (
            <>
              <div
                onClick={() => handleNavigate(item)}
                className="px-5 flex items-center space-x-5 cursor-pointer"
              >
                {item.icons}
                <span>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavigation;
