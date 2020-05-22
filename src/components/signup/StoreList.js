import React from 'react';

const StoreList = ({ stores, onChange, value }) => {
  return (
    <>
      <select name="store" value={value} onChange={onChange}>
        {stores.map((store) => {
          return (
            <option key={store.id} value={store.name}>
              {store.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default StoreList;
