import {createAction} from 'redux-act';

const getUser = createAction('GETUSER');

const setUser = createAction('SETUSER');

export {getUser, setUser};
