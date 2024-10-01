
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import { Home } from './components/Home/Home';
import RestaurantDetails from './components/Restaurant/RestaurantDeatils';
import Cart from './components/Cart/Cart';


function App() {
  return (
   <ThemeProvider theme={darkTheme}>
     <CssBaseline/>
      <Navbar/>
    {/*<Home/> */}
    {/*<RestaurantDetails/>*/}
   
    <Cart/>
   </ThemeProvider>
  );
}


export default App;
