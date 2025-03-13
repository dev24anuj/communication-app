import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Connecting People Across Faiths & Interests</h1>
      <p>
        Connecting people of all faiths through events and community support.
      </p>
      <button onClick={() => navigate("/events")} className="explore-btn">
        Explore Events{" "}
      </button>
    </div>
  );
}

export default HomePage;
