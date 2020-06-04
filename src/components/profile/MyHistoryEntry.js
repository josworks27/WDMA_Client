/* eslint-disable react/no-array-index-key */
import React from 'react';

const MyHistoryEntry = ({ data }) => {
  return (
    <>
      <h2>My History</h2>
      <div>[Dress Model] [Event Type] [Event Details] [Customer Name]</div>
      {data.map((event, i) => {
        return (
          <div key={i}>
            <h3>{event.date}</h3>
            <ul>
              {event.children.map((item) => {
                return (
                  <div key={item.id}>
                    {item['customer.name'] ? (
                      <li>{`[${item['dress.model']}] [${item.type}] [${item.details}] [${item['customer.name']}]`}</li>
                    ) : (
                      <li>{`[${item['dress.model']}] [${item.type}] [${item.details}]`}</li>
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default MyHistoryEntry;
