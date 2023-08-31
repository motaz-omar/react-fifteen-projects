
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import SubMenu from "./SubMenu";
import { AppProvider } from "./context";
function StripeSubmenusApp() {
  return (
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <SubMenu />
    </AppProvider>
  );
}

export default StripeSubmenusApp;
