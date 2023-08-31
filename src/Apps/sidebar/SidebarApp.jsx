import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { AppProvider } from "./context";
function SidebarApp() {
  return (
    <>
      <AppProvider>
        <Home />
        <Modal />
        <Sidebar />
      </AppProvider>
    </>
  );
}

export default SidebarApp;
