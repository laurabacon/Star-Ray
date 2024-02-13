import { Outlet } from "react-router-dom";
import NavTabs from "./components/NavTabs";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="mx-3">
        <NavTabs />
        <Outlet />
        {/* <Footer /> */}
      </main>
    </>
  );
}



export default App;
