import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import OurSoftware from './pages/OurSoftware'
import Projects from './pages/Projects'
import IndustriesPage from './pages/IndustriesPage'
import InsightsPage from './pages/InsightsPage'
import CaseStudies from './pages/CaseStudies'
import Careers from './pages/Careers'
import ContactUs from './pages/ContactUs'
import TermsAndConditions from './pages/TermsAndConditions'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'services', element: <Services /> },
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