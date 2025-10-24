import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string; };
}

interface UsersState {
  list: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (): Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
  }
);

const initialState: UsersState = { list: [], status: 'idle', error: null };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.status = 'loading'; state.error = null; })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => { state.status = 'succeeded'; state.list = action.payload; })
      .addCase(fetchUsers.rejected, (state, action) => { state.status = 'failed'; state.error = action.error.message || 'Something went wrong'; });
  },
});

export default usersSlice.reducer;
