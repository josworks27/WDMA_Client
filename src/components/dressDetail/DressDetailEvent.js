import React from 'react';
import styled from 'styled-components';

const DetailEventSection = styled.section`
  border: 1px solid ${(props) => props.theme.mainColor};
  width: 50%;
  height: 450px;
  height: 100%;
  padding: 20px;
`;

const DressDetailInfo = ({ events }) => {
  return (
    <DetailEventSection>
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
    </DetailEventSection>
  );
};

export default DressDetailInfo;
