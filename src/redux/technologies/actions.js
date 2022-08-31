import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from './api';

export const FETCH = 'aoe2-details/technologies/FETCH';
export const FETCH_FULFILLED = 'aoe2-details/technologies/FETCH/fulfilled';
export const getTechnologies = createAsyncThunk(FETCH, async () => fetchData());
