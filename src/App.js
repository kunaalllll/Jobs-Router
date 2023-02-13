import { createBrowserRouter,
  Route,
  NavLink, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import RootLayout from "./RootLayout";
import HelpLayout from "./HelpLayout";
import Faq from "./Faq";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Careers, {careersLoader} from "./Careers"


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<RootLayout /> }>
          <Route index element = { <Home /> } />
          <Route path="about" element = { <About /> }/>
    <Route path="help" element={<HelpLayout /> }>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>

    <Route path="careers" element={ <CareersLayout />}>
        <Route 
        index 
        element={ <Careers />}
        loader={careersLoader}
      />
    </Route>

    
        <Route path="*" element={<NotFound />} />
    </Route>

  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
