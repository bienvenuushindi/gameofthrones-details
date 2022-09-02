import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from './api';

export const FETCH = 'aoe2-details/characters/FETCH';
export const FETCH_FULFILLED = 'aoe2-details/characters/FETCH/fulfilled';
export const getCharacters = createAsyncThunk(FETCH, async () => fetchData());
