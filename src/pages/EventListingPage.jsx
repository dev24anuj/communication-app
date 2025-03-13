import { useState } from "react";

function EventListingPage({ sampleEvents }) {
  const [events, setEvents] = useState(sampleEvents);
  const [filter, setFilter] = useState("");

  const handleAddEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      id: events.length + 1,
      title: e.target.title.value,
      date: e.target.date.value,
      location: e.target.location.value,
      category: e.target.category.value,
    };
    setEvents([...events, newEvent]);
    e.target.reset();
  };

  const filteredEvents = filter
    ? events.filter((event) => event.category === filter)
    : events;

  return (
    <div className="events">
      <h2>Events</h2>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      <ul className="event-list">
        {filteredEvents.map((event) => (
          <li key={event.id} className="event-item">
            <h3>{event.title}</h3>
            <p>
              {event.date} - {event.location}
            </p>
            <p>Category: {event.category}</p>
          </li>
        ))}
      </ul>

      <form className="event-form" onSubmit={handleAddEvent}>
        <input type="text" name="title" placeholder="Event Title" required />
        <input type="date" name="date" required />
        <input type="text" name="location" placeholder="Location" required />
        <select name="category" required>
          <option value="">Select Category</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default EventListingPage;
