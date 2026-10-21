import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import WebDevelopment from './pages/WebDevelopment'
import OurSoftware from './pages/OurSoftware'
import Projects from './pages/Projects'
import IndustriesPage from './pages/IndustriesPage'
import InsightsPage from './pages/InsightsPage'
import CaseStudies from './pages/CaseStudies'
import Careers from './pages/Careers'
import ContactUs from './pages/ContactUs'
import TermsAndConditions from './pages/TermsAndConditions'
import NotFound from './pages/NotFound'
import AppDevelopment from './pages/AppDevelopment.jsx'
import SoftwareDevelopment from "./pages/SoftwareDevelopment.jsx"
import DigitalMarketing from './pages/DigitalMarketing.jsx'
import Graphics from './pages/Graphics.jsx'
import ERP from './pages/ERP.jsx'
import Domain from './pages/Domain.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'services', element: <Services /> },
      { path: 'services/web-design-development', element: <WebDevelopment /> },
      {path: 'services/mobile-app-development',element:<AppDevelopment/>},
      {path:'services/software-development',element:<SoftwareDevelopment/>},
      {path:'services/digital-marketing' ,element:<DigitalMarketing/>},
      {path:'services/graphic-designing' ,element:<Graphics/>},
      {path:'services/erp-crm' ,element:<ERP/>},
      {path:'services/domain-hosting' ,element:<Domain/>},


      { path: 'Our-Software', element: <OurSoftware /> },
      { path: 'projects', element: <Projects /> },
      { path: 'industries', element: <IndustriesPage /> },
      { path: 'insights', element: <InsightsPage /> },
      { path: 'case-studies', element: <CaseStudies /> },
      { path: 'careers', element: <Careers /> },
      { path: 'contact-us', element: <ContactUs /> },
      { path: 'terms-and-conditions', element: <TermsAndConditions /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
