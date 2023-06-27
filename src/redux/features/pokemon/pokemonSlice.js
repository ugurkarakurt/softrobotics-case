import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemon: '',
  poke: '',
  title: 'Pokemon',
}

export const getPokemons = createAsyncThunk('getPokemons', async (url) => {
  const { data } = await axios.get(url);
  return data;
});

export const getPokemon = createAsyncThunk('getPokemon', async (url) => {
  const { data } = await axios.get(url);
  return data;
});


export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    title: (state, action) => {
      state.title = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      state.pokemon = action.payload
    });
    builder.addCase(getPokemon.fulfilled, (state, action) => {
      state.poke = action.payload
    });
  }
})

export const { title } = pokemonSlice.actions;
export default pokemonSlice.reducer