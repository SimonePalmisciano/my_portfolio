import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";





function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={MainLayout}>
            <Route index Component={HomePage} />
            <Route path="/project/:projectId" Component={ProjectDetail} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
