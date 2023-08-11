import axios from 'axios';

const DB_URL =
  'https://react-native-expenses-842f3-default-rtdb.firebaseio.com';

export const saveExpense = async expenseData => {
  const resp = await axios.post(`${DB_URL}/expenses.json`, expenseData);
  return resp.data.name;
};

export const getExpenses = async () => {
  const resp = await axios.get(`${DB_URL}/expenses.json`);
  const formattedResp = Object.entries(resp.data ?? {}).map(([key, value]) => {
    return {
      ...value,
      id: key,
      date: new Date(value.date),
    };
  });
  return formattedResp;
};

export const updateExpense = (id, expenseData) => {
  return axios.put(`${DB_URL}/expenses/${id}.json`, expenseData);
};

export const deleteExpense = id => {
  return axios.delete(`${DB_URL}/expenses/${id}.json`);
};
