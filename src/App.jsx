import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BirthdayReminderApp from "./Apps/birthday_reminder/BirthdayReminderApp";
import ToursApp from "./Apps/tours/ToursApp";
import ReviewsApp from "./Apps/reviews/ReviewsApp";
import AccordionApp from "./Apps/accordion/AccordionApp";
import MenuApp from "./Apps/menu/MenuApp";
import TabsApp from "./Apps/tabs/TabsApp";
import SliderApp from "./Apps/slider/SliderApp";
import LoremIpsumApp from "./Apps/lorem_ipsum/LoremIpsumApp";
import GroceryBudApp from "./Apps/grocery_bud/GroceryBudApp";
import NavbarApp from "./Apps/navbar/NavbarApp";
import SidebarApp from "./Apps/sidebar/SidebarApp";
import Navbar from "./Navbar";
import StripeSubmenusApp from "./Apps/stripe_submenus/StripeSubmenusApp";
import ColorGeneratorApp from "./Apps/color_generator/ColorGenerator";
import CartApp from "./Apps/cart/CartApp";

import Home from "./Apps/cocktails/pages/Home";
import About from "./Apps/cocktails/pages/About";
import SingleCocktail from "./Apps/cocktails/pages/SingleCocktail";
import Error from "./Apps/cocktails/pages/Error";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"></Route>
          <Route
            path="/1_birthday_reminder"
            element={<BirthdayReminderApp />}
          ></Route>
          <Route path="/2_tours" element={<ToursApp />}></Route>
          <Route path="/3_reviews" element={<ReviewsApp />}></Route>
          <Route path="/4_accordion" element={<AccordionApp />}></Route>
          <Route path="/5_menu" element={<MenuApp />}></Route>
          <Route path="/6_tabs" element={<TabsApp />}></Route>
          <Route path="/7_slider" element={<SliderApp />}></Route>
          <Route path="/8_lorem-ipsum" element={<LoremIpsumApp />}></Route>
          <Route
            path="/9_color-generator"
            element={<ColorGeneratorApp />}
          ></Route>
          <Route path="/10_grocery-bud" element={<GroceryBudApp />}></Route>
          <Route path="/11_navbar" element={<NavbarApp />}></Route>
          <Route path="/12_sidebar" element={<SidebarApp />}></Route>
          <Route
            path="/13_stripe-submenus"
            element={<StripeSubmenusApp />}
          ></Route>
          <Route path="/14_cart" element={<CartApp />}></Route>

          <Route path="/15_cocktail" element={<Home />} />
          <Route path="15_cocktail/about" element={<About />} />
          <Route path="15_cocktail/:id" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
