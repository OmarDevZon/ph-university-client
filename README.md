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
---
