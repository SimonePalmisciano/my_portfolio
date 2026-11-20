import HomePage from "./pages/HomePage.jsx";
import Header from "./partials/Header.jsx";




function App() {

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-12 col-md-9 min-vh-100 py-4 pt-5 pt-md-4 mt-2 mt-md-0">
          <HomePage />
        </main>
        <Header />
      </div>
    </div>
  )
}
export default App;
