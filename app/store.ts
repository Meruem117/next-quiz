import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loginReducer from '@/features/login/loginSlice'
import userReducer from '@/features/user/userSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedLoginReducer = persistReducer(persistConfig, loginReducer)
const persistedUserReducer = persistReducer(persistConfig, userReducer)

export function makeStore() {
  return configureStore({
    reducer: {
      login: persistedLoginReducer,
      user: persistedUserReducer
    }
  })
}

const store = makeStore()

export const persistor = persistStore(store)

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
