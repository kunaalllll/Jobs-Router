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
import CareersLayout from "./CareersLayout";
import Faq from "./Faq";
import Contact, { contactAction } from "./Contact";
import NotFound from "./NotFound";
import Careers, { careersLoader } from "./Careers";
import CareerDetails, { careerDetailsLoader } from "./CareerDetails";
import CareersError from "./CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />

        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
