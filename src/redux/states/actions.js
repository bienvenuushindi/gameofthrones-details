import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchStates from './api';

export const FETCH_STATES = 'covid-tracking/states/FETCH_DATA';
export const FETCH_STATES_FULFILLED = 'covid-tracking/states/FETCH_DATA/fulfilled';

export const getAll = createAsyncThunk(FETCH_STATES, async () => fetchStates());
