import {createReducer} from 'redux-act';

import {setUser} from '../actions';

const initialUser = {
  name: 'bizan',
  email: 'bizan@bizan.com',
  image: 'https://randomuser.me/api/portraits/med/men/60.jpg',
};

const userReducer = createReducer(
  {
    [setUser]: (state, payload) => [...state, payload],
  },
  [initialUser],
);

export default userReducer;
