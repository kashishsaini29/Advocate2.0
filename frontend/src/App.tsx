import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Login from "./components/Login"
import { PersonalLegalConsultant } from "./components/Home/elements/PersonalLegalConsultant"


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:'/personal-legal-consultant',
    element:<PersonalLegalConsultant/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])
export const App = () => (

  <ChakraProvider theme={theme}>
    <RouterProvider router={router}/>
  </ChakraProvider>
)
