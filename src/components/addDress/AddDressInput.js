import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StoreList from '../signup/StoreList';
import { POST_DRESS_REQUEST } from '../../store/modules/dress/dress';

const AddDressInput = ({ history }) => {
  const [addDress, setAddDress] = useState({
    model: '',
    price: '',
    accessoryOne: '',
    accessoryTwo: '',
    accessoryThree: '',
    store: 'Yokohama',
    images: [],
  });

  const { dressId } = useSelector((state) => state.dressReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // 드레스 리스트로 이동
    if (dressId) {
      history.push(`/dress/${dressId}`);
    }
  }, [dressId, history]);

  const handleSelect = (event) => {
    const { files } = event.target;

    setAddDress({
      ...addDress,
      images: [...files],
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAddDress({
      ...addDress,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // POST 요청할 폼데이터 작성
    let formData = new FormData();
    for (let i = 0; i < addDress.images.length; i += 1) {
      formData.append(`images`, addDress.images[i]);
    }

    formData.append('model', addDress.model);
    formData.append('price', addDress.price);
    formData.append('accessoryOne', addDress.accessoryOne);
    formData.append('accessoryTwo', addDress.accessoryTwo);
    formData.append('accessoryThree', addDress.accessoryThree);
    formData.append('store', addDress.store);

    // 디스패치 하기
    dispatch({
      type: POST_DRESS_REQUEST,
      data: { formData },
    });
  };

  return (
    <>
      <main>
        <div className="container">
          <form className="add-dress-form" onSubmit={handleSubmit}>
            <div className="add-dress__group">
              <label>Model</label>
              <input
                type="text"
                name="model"
                placeholder="model"
                value={addDress.model}
                onChange={handleChange}
                required
              />
            </div>
            <div className="add-dress__group">
              <label>Price</label>
              <input
                type="number"
                name="price"
                placeholder="price"
                value={addDress.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="add-dress__group">
              <label>Accessories</label>
              <input
                type="text"
                name="accessoryOne"
                placeholder="option 1"
                value={addDress.accessoryOne}
                onChange={handleChange}
              />
              <input
                type="text"
                name="accessoryTwo"
                placeholder="option 2"
                value={addDress.accessoryTwo}
                onChange={handleChange}
              />
              <input
                type="text"
                name="accessoryThree"
                placeholder="option 3"
                value={addDress.accessoryThree}
                onChange={handleChange}
              />
            </div>
            <div className="add-dress__group">
              <label>Store</label>
              <StoreList belongStore={addDress.store} onChange={handleChange} />
            </div>
            <div className="add-dress__group">
              <label>Image</label>
              <input
                type="file"
                name="images"
                multiple="multiple"
                onChange={handleSelect}
              />
            </div>
            <button type="submit">Add Dress</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default AddDressInput;
