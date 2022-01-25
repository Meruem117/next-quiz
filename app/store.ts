import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import loginReducer from '@/features/login/loginSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedLoginReducer = persistReducer(persistConfig, loginReducer)

export function makeStore() {
  return configureStore({
    reducer: { login: persistedLoginReducer },
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
