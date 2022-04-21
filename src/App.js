import React, {useContext} from "react"
import "./styles/main.scss"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Content from "./Components/Content"
import Help from "./Components/SubComponents/Help/Help"
import AboutUs from "./Components/SubComponents/AboutUs/AboutUs"
import Docs from "./Components/SubComponents/Docs/Docs"
import OurProject from "./Components/SubComponents/OurProject/OurProject"
import Settings from "./Components/SubComponents/Settings/Settings"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import User from "./Components/SubComponents/User"
import RegisterPage from "./Components/Users/RegisterPage"
import LoginPage from "./Components/Users/LoginPage"
import Chat from "./Components/SubComponents/Chat/client/Chat"
import {
  SettingsDataContext,
  SettingsDataProvider,
} from "./Components/Context/SettingsContext"
import {
  ThemeContext,
  ThemeContextProvider,
} from "./Components/Context/ThemeContext"
import ForOwners from "./Components/SubComponents/Chat/client/ForOwners"

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <SettingsDataProvider>

               <div className='App'>
                <Header/>
                <Routes>
                  <Route path='/' element={<Content />} />
                  <Route path='/user' element={<User />} />
                  <Route path='/categories/:category/:subcategory' />

                  <Route path='categories/help/*' element={<Help />} />
                  <Route path='categories/about-us/*' element={<AboutUs />} />
                  <Route path='categories/docs/*' element={<Docs />} />
                  <Route path='categories/our-project/*' element={<OurProject />} />
                  <Route path='settings' element={<Settings />} />

                  <Route path='users/register' element={<RegisterPage />} />
                  <Route path='users/login' element={<LoginPage />} />
                  <Route path='users/verified-registration-email' element={<p>Registration email</p>} />
                  <Route path="chat" element={<Chat />} />
                  <Route path="system" element={<ForOwners />} />
              
                 

                </Routes>

                <Footer />
          </div>

        </SettingsDataProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}
export default App
