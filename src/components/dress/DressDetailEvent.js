import React from 'react';

const DressDetailInfo = ({ events }) => {
  return (
    <>
      <div>
        <h3>Event List</h3>
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
    </>
  );
};

export default DressDetailInfo;
