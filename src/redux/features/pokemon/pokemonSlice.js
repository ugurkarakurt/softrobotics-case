import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemons: []
}

export const getPokemons = createAsyncThunk('getPokemons', async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
  return data;
});


export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload
    })
  }
})

export default pokemonSlice.reducer