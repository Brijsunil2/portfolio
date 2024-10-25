import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Loading from "./pages/Loading/Loading";

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
