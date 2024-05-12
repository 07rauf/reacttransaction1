import React, { useState, useEffect } from 'react';
import './App.css';
import Component2 from './components/component2';
import { useDispatch, useSelector } from 'react-redux';
import { From, To, Amount } from './state/slices/addSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Component1 from './components/component1';

function App() {
  const [opened, setOpened] = useState(false);
  const [datafetch, setData] = useState([]);
  const [editOpen, setEditOpen] = useState(null);   
  const [uiApi, setUiApi] = useState(null); 
  const dispatch = useDispatch();
  const { from, to, amount } = useSelector((state) => state.add);

  const Openbox = () => {
    setOpened(true);
  };

  const Closebox = () => {
    setOpened(false);
    setEditOpen(null); 
  };

  const Delete = (id) => {
    fetch(`https://acb-api.algoritmika.org/api/transaction/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response) {
        setData(datafetch.filter(transaction => transaction.id !== id));
      }
    });
  };

  const handleEdit = (id) => {
    setEditOpen(id); 
    Openbox(); 
  };

  useEffect(() => {
    if (from && to && amount) {
      fetch('https://acb-api.algoritmika.org/api/transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ from, to, amount })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUiApi(data); 
      });
    }
  }, [from, to, amount]);

  useEffect(() => {
    if (uiApi) {
      setData([...datafetch, uiApi]); 
    }
  }, [uiApi]);

  useEffect(() => {
    fetch('https://acb-api.algoritmika.org/api/transaction')
    .then(response => response.json())
    .then(data => {
      setData(data);
    });
  }, []);
  

  return (
    <div className='App'>
      <button type="button" className="addbutton" onClick={Openbox}>
        ADD
      </button>
      {opened && !editOpen && <Component2 Closed={Closebox} />}
      <h1>API MƏLUMATLARI:</h1>
      <div> 
        {datafetch.map(transaction => (
          <p className='flex' key={transaction.id}>
            <p>From: {transaction.to}</p>
            <p>To: {transaction.from}</p> 
            <p>Amount: {transaction.amount}</p>
            <button className='edit-button' onClick={() => handleEdit(transaction.id)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            {editOpen === transaction.id && <Component1 Closed={Closebox} />} 
            <button className='deletebutton' onClick={() => Delete(transaction.id)}>
              <span>CONFIRM DELETE</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
