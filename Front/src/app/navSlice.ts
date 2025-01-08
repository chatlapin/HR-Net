import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NavState {
  currentPage: string
}

const initialState: NavState = {
  currentPage: 'home'
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    changeCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload
    }
  }
})

// Export actions
export const { changeCurrentPage } = navSlice.actions

// Export reducer
export default navSlice.reducer