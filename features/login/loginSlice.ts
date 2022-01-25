import { createSlice } from '@reduxjs/toolkit'
import type { AppState } from '@/app/store'

export interface loginState {
  isLogin: boolean
}

const initialState: loginState = {
  isLogin: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state) => {
      state.isLogin = true
    },
    logout: (state) => {
      state.isLogin = false
    }
  }
})

export const { login, logout } = loginSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectLogin = (state: AppState) => state.login

export default loginSlice.reducer
