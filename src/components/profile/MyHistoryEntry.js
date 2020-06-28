/* eslint-disable react/no-array-index-key */
import React from 'react';
import MaterialTable from 'material-table';

const MyHistoryEntry = ({ data }) => {
  return (
    <MaterialTable
      title="My Event History"
      columns={[
        { title: 'Date', field: 'date', type: 'date' },
        { title: 'Model', field: 'dress.model' },
        { title: 'Type', field: 'type' },
        { title: 'Detail', field: 'details' },
        { title: 'Customer', field: 'customer.name' },
      ]}
      data={data}
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
  );
};

export default MyHistoryEntry;
