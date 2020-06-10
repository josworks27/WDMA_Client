/* eslint-disable react/no-array-index-key */
import React from 'react';

const MyHistoryEntry = ({ data }) => {
  return (
    <main>
      <div className="container">
        {data.map((event, i) => {
          return (
            <article key={i}>
              <h1>{event.date}</h1>
              <ul>
                {event.children.map((item) => {
                  return (
                    <>
                      {item['customer.name'] ? (
                        <li key={item.id}>
                          <div>
                            {`[${item['dress.model']}] [${item.type}] [${item.details}] [${item['customer.name']}]`}
                          </div>
                        </li>
                      ) : (
                        <li>
                          <div>
                            {`[${item['dress.model']}] [${item.type}] [${item.details}]`}
                          </div>
                        </li>
                      )}
                    </>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default MyHistoryEntry;

// Material table 사용
