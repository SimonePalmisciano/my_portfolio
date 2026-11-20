import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";





function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={MainLayout}>
            <Route index Component={HomePage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
