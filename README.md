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
<React.StrictMode>

```bash
    <RouterProvider router={router} />
```

</React.StrictMode>

---
