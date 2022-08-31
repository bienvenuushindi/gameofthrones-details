import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from './api';

export const FETCH = 'aoe2-details/civilizations/FETCH';
export const FETCH_FULFILLED = 'aoe2-details/civilizations/FETCH/fulfilled';
export const getCivilizations = createAsyncThunk(FETCH, async () => fetchData());
