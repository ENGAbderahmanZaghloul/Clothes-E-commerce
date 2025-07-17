import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <section>
      <TopHeader />

      <div className="container px-1 sm:px-5 md:px-12">
        <RouterProvider router={router} />
      </div>
    </section>
  );
}

export default App;
