import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from './api';

export const FETCH = 'aoe2-details/units/FETCH';
export const FETCH_FULFILLED = 'aoe2-details/units/FETCH/fulfilled';
export const getUnits = createAsyncThunk(FETCH, async () => fetchData());
