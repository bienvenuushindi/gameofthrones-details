import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from './api';

export const FETCH = 'aoe2-details/structures/FETCH';
export const FETCH_FULFILLED = 'aoe2-details/structures/FETCH/fulfilled';
export const getStructures = createAsyncThunk(FETCH, async () => fetchData());
