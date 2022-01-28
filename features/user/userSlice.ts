import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '@/app/store'
import type { userInfoItem } from '@/models/user'

const initialState: userInfoItem = {
  id: -1,
  name: '',
  role: -1,
  gender: -1
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    set: (state, action: PayloadAction<userInfoItem>) => {
      Object.assign(state, action.payload)
    },
    clear: (state) => {
      Object.assign(state, initialState)
    }
  }
})

export const { set, clear } = userSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: AppState) => state.user

export default userSlice.reducer
