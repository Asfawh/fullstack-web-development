import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
  };

// these two lines are same, short and precise for the above code
// export const fetchUser = () => async dispatch =>
//     dispatch({ type: FETCH_USER, payload: await axios.get('api/current_user') })

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  
  dispatch({ type: FETCH_USER, payload: res.data});
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);
  
  history.push('/api/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};