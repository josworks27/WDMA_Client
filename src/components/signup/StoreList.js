import React from 'react';

const StoreList = ({ stores, onChange, belongStore }) => {
  return (
    <>
      <select name="store" value={belongStore} onChange={onChange}>
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
