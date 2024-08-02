import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCoffees = createAsyncThunk(
  'getCoffees',
  async (args, { rejectWithValue }) => {
    const response = await fetch('http://localhost:3000/api/products');

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getCoffee = createAsyncThunk(
  'getCoffee',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const addCoffee = createAsyncThunk(
  'addCoffee',
  async (data, { rejectWithValue }) => {
    const response = await fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With',
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const updateCoffee = createAsyncThunk(
  'updateCoffee',
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3000/api/products/${data.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteCoffee = createAsyncThunk(
  'deleteCoffee',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'DELETE',
    });
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const coffeeSlice = createSlice({
  name: 'coffeeSlice',
  initialState: {
    coffee: {},
    coffees: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getCoffees.pending]: (state) => {
      state.loading = true;
    },
    [getCoffees.fulfilled]: (state, action) => {
      state.loading = false;
      state.coffees = action.payload;
    },
    [getCoffees.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [deleteCoffee.pending]: (state) => {
      state.loading = true;
    },
    [deleteCoffee.fulfilled]: (state, action) => {
      state.loading = false;
      const { _id } = action.payload;
      if (_id) {
        state.coffees = state.coffees.filter((coffee) => coffee._id !== _id);
      }
    },
    [deleteCoffee.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [updateCoffee.pending]: (state) => {
      state.loading = true;
    },
    [updateCoffee.fulfilled]: (state, action) => {
      state.loading = true;
      state.coffees = state.coffees.map((coffee) =>
        coffee._id === action.payload._id ? action.payload : coffee
      );
    },
    [updateCoffee.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default coffeeSlice.reducer;
