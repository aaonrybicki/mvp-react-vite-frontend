//Mapping components guide
//1) parent component = app.jsx subcomponents of app are body, navbar, header, footer
import Navbar1 from './components/Navbar'
import Header from './components/Header'
import Body from './components/body'
import React, { useEffect, useState } from 'react'
import Footer from './components/footer'

function App() {
  //=====================State===============================//
  const [displayMenuItems, setDisplayMenuItems] = useState(false);
  const [displayCatItems, setDisplayCatItems] = useState(false);
  const [backEndData, setbackEndData] = useState([{}]);
  const [menuCategoryData, setMenuCategoryData] = useState([{}]);
  const [homeButton, setHomeButton] = useState(false);
  const [modifyButton, setModifyButton] = useState(false);
  const [changeMenuItem, setChangeMenuItem] = useState(false);
  const [deleteMenuItem, setDeleteMenuItem] = useState(false);
  const [refreshItems, setRefreshItems] = useState(false)
  const contextData = {displayMenuItems, setDisplayMenuItems, displayCatItems, 
  setDisplayCatItems, backEndData, setbackEndData, menuCategoryData, setMenuCategoryData, 
  homeButton, setHomeButton, modifyButton, setModifyButton, changeMenuItem, 
  setChangeMenuItem, deleteMenuItem, setDeleteMenuItem, refreshItems, setRefreshItems }
  //=======================routes================================//
  const API_URL = "https://mvp-react-server.onrender.com"
  // const API_URL = "http://localhost:8001"
  useEffect(() => {
    fetch(`${API_URL}/menuItems`)
      .then(
        response => response.json()
      )
      .then(
        data => {
          setbackEndData(data)
          console.log(data)
        }
      )
  }, [refreshItems]);
  useEffect(() => {
    fetch(`${API_URL}/menuCategories`)
      .then(
        response => response.json()
      )
      .then(
        data => {
          setMenuCategoryData(data)
          console.log(data)
        }
      )
  }, []);
  // pass the state down to subComponents using contextApi
  return (
    <appContext.Provider value={{...contextData}} >
      <div>
        <Header />
        <Navbar1 />
        <Body />
        <Footer />
      </div>
    </appContext.Provider>
  )
};


export const appContext = React.createContext();
export default App