import React from 'react';

const DressDetailInfo = ({ events }) => {
  return (
    <section className="dress-event">
      <h1>Event List</h1>
      <div className="dress-event__list">
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              {event.type === 'customerRent' || event.type === 'fitting'
                ? `[${event.date}] [${event.type}] [${event['customer.name']} San] : ${event.details}`
                : `[${event.date}] [${event.type}] : ${event.details}`}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DressDetailInfo;
