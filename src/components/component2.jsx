import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { From, To, Amount } from '../state/slices/addSlice';
import './component2.css';

const Component2 = ({ Closed }) => {
  const dispatch = useDispatch();
  const [dataforvalue, setDataforvalue] = useState( );
  const newApis = (e) => {
    setDataforvalue({ 
      ...dataforvalue,
       [e.target.name]: e.target.value });
  };

  const addToApi = () => {
    dispatch(From(dataforvalue.from));
    dispatch(To(dataforvalue.to));
    dispatch(Amount(dataforvalue.amount));
  };
  return (
    <div className='component2'>
      <div className="form">
        <input name="to" type="text" placeholder="FROM" onChange={newApis} /><br />
        <input name="from" type="text" placeholder="TO" onChange={newApis} /><br />
        <input name="amount" type="text" placeholder="Amount" onChange={newApis} /><br />
        <button type="button" className="addbuttonn" onClick={addToApi}>
          Add Api
        </button>
        <button type="button" className="closebutton" onClick={Closed}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Component2;
