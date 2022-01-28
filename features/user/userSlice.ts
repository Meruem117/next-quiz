import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '@/app/store'
import type { userInfoItem } from '@/models/user'

export interface userState {
  userInfo: userInfoItem
}

const initialState: userState = {
  userInfo: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    set: (state, action: PayloadAction<userInfoItem>) => {
      state.userInfo = action.payload
    },
    clear: (state) => {
      state.userInfo = initialState.userInfo
    }
  }
})

export const { set, clear } = userSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: AppState) => state.user

export default userSlice.reducer
