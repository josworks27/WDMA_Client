import React from 'react';
import styled from 'styled-components';
import MaterialTable from 'material-table';

const DetailEventSection = styled.section`
  border: 1px solid ${(props) => props.theme.mainColor};
  width: 50%;
  height: 450px;
  height: 100%;
  padding: 20px;
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center;
  }
`;

const DressDetailInfo = ({ events }) => {
  return (
    <DetailEventSection>
      <h1>Event List</h1>
      <MaterialTable
        title="Dress Event"
        columns={[
          { title: 'Date', field: 'date' },
          { title: 'Type', field: 'type' },
          { title: 'Detail', field: 'details' },
          { title: 'Customer', field: 'customer.name' },
        ]}
        data={events}
        options={{
          search: false,
          paging: false,
          headerStyle: {
            backgroundColor: '#ff4757',
            color: 'white',
          },
          rowStyle: {
            backgroundColor: 'rgb(20, 20, 20)',
            color: 'white',
          },
        }}
      />
    </DetailEventSection>
  );
};

export default DressDetailInfo;
