import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MainLayout from "./layout/mainLayout";
import NoPage from "./pages/nopage";
import Wishlist from "./pages/wishlist";
import Basket from "./pages/basket";
import ToDoList from "./pages/todolist";
import BasketProvider from "./context/basketContext";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <BasketProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="basket" element={<Basket />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="todolist" element={<ToDoList />} />

                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </BasketProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
