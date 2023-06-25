import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemon: '',
  title: 'PokeAPI'
}

export const getPokemons = createAsyncThunk('getPokemons', async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
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
    })
  }
})

export const { title } = pokemonSlice.actions;
export default pokemonSlice.reducer