using vite

### 1. needed npm package

```bash
npm i react-router-dom react-hook-form antd
```

### 2. how can install antd design

goto https://ant.design/docs/react/introduce

```bash
yarn add antd
```

---

### set up a router with react-router-dom

```bash
npm install react-router-dom
```

```bash
src/routes/routes.tsx
```

```bash
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ContactUs } from "../pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
]);

export default router;
```

changes main file
main.tsx
<br/>
<React.StrictMode>

```bash
    <RouterProvider router={router} />
```

</React.StrictMode>

---

## How can setup a redux

1. crate a store

```bash
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

2. connect a store in main file
   <React.StrictMode>

```bash
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
```

</React.StrictMode>

3. create a hook for type

```bash
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
```

4. create a slice

```bash
import { createSlice } from "@reduxjs/toolkit";

export type TInitialState = {
  user: object | null;
  token: object | null;
};

const initialState: TInitialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

```

5. Create base api

```bash
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: () => ({

  }),
});

```

6. create a auth end point

```bash
import { baseApi } from "../../api/api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;

```

7. use redux in logins from
   const [login, { data, isError, isLoading }] = useLoginMutation({});
   login(userInfo);

8. connect base api in store

export const store = configureStore({
reducer: {
`bash 
    [baseApi.reducerPath]: baseApi.reducer,
    `
auth: authSlice,
},

```bash
middleware: (getDefaultMiddlewares) => {
  return getDefaultMiddlewares().concat(baseApi.middleware);
},
```

});

9.

export const baseApi = createApi({
reducerPath: "baseApi",
baseQuery: fetchBaseQuery({
baseUrl: "http://localhost:5000/api/v1",

```bash
    credentials: "include",
```

}),
endpoints: () => ({}),
});

10 don't forget change server file 


app.use(cors({ origin: ['http://localhost:5173'],
```bash
 credentials: true 
```
 }));
---
