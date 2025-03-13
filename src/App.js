import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import EventListingPage from "./pages/EventListingPage";
import AboutPage from "./pages/AboutPage";

const sampleEvents = [
  {
    id: 1,
    title: "Interfaith Prayer",
    date: "2025-04-10",
    location: "Community Hall",
    category: "Religious",
  },
  {
    id: 2,
    title: "Charity Drive",
    date: "2025-05-15",
    location: "Downtown",
    category: "Charity",
  },
  {
    id: 3,
    title: "Social Gathering",
    date: "2025-06-01",
    location: "Park",
    category: "Social",
  },
];

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/events"
          element={<EventListingPage sampleEvents={sampleEvents} />}
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
