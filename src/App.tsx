import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import TopHeader from "./components/TopHeader";
import HomeContent from "./components/home/HomeContent";

function App() {
  return (
    <section>
      <TopHeader />

      <div>
        <RouterProvider router={router} />
        <HomeContent />
      </div>
    </section>
  );
}

export default App;
