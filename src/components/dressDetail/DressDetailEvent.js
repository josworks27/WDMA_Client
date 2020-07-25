import React from 'react';
import MaterialTable from 'material-table';
import { DetailEventSection } from './dressDetatilStyles';

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
