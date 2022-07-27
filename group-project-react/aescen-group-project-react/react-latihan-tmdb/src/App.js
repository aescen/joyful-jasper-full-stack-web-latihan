import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import UserContextProvider from "./context/UserContext";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import MovieDetail from "./components/movies/MovieDetail";
import TvSerialDetail from "./components/tvshows/TvSerialDetail";
import MovieList from "./components/movies/MovieList";
import TvSeriesList from "./components/tvshows/TvSeriesList";
import About from "./components/about/About";
import NotFoundImg from "./assets/404.svg";
import Description from "./components/about/Description";
import Services from "./components/about/Services";
import Footer from "./components/footer/Footer";
import Login from "./components/users/Login";
import Register from "./components/users/Register";

function App() {
  return (
    <Router>
      <ContextProvider providers={[<UserContextProvider />]}>
        <Navbar />
        <div className="App-container">
          <div className="App-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="movies" element={<MovieList />} />
              <Route path="tvshows" element={<TvSeriesList />} />
              <Route path="movie/:id" element={<MovieDetail />} />
              <Route path="tv/:id" element={<TvSerialDetail />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="about" element={<About />}>
                <Route path="description" element={<Description />} />
                <Route path="services" element={<Services />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>

        <Footer className="App-footer" />
      </ContextProvider>
    </Router>
  );
}

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        margin: 128,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Cannot find what you are looking for</h2>
      <br />
      <br />
      <img src={NotFoundImg} alt="404" width="480px" />
    </div>
  );
}

export default App;
