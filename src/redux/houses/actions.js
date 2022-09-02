import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from './api';

export const FETCH = 'aoe2-details/houses/FETCH';
export const FETCH_FULFILLED = 'aoe2-details/houses/FETCH/fulfilled';
export const getHouses = createAsyncThunk(FETCH, async () => fetchData());
