import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { openDB } from 'idb';
import { BalanceReducer } from '../reducer/BalanceReducer';

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BalanceReducer, initialState);

  useEffect(() => {
    loadTransactionsFromDB();
  }, []);

  const openDatabase = async () => {
    return await openDB('transactions-db', 1, {
      upgrade(db) {
        db.createObjectStore('transactions', { keyPath: 'id', autoIncrement: true });
      },
    });
  };

  const loadTransactionsFromDB = async () => {
    try {
      const db = await openDatabase();
      const tx = db.transaction('transactions', 'readonly');
      const store = tx.objectStore('transactions');
      const transactions = await store.getAll();
      console.log('All transactions:', transactions);
      dispatch({ type: 'LOAD_TRANSACTIONS', payload: transactions });
      console.log("state", state)
    } catch (error) {
      console.error('Error loading transactions from IndexedDB:', error);
    }
  };

  const addTransaction = async (transaction) => {
    try {
      const db = await openDatabase();
      const tx = db.transaction('transactions', 'readwrite');
      const store = tx.objectStore('transactions');
      await store.add(transaction);
      await tx.done;
      dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    } catch (error) {
      console.error('Error adding transaction to IndexedDB:', error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      const db = await openDatabase();
      const tx = db.transaction('transactions', 'readwrite');
      const store = tx.objectStore('transactions');
      await store.delete(id);
      await tx.done;
      dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    } catch (error) {
      console.error('Error deleting transaction from IndexedDB:', error);
    }
  };

  const value = {
    transactions: state.transactions,
    addTransaction,
    deleteTransaction,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
