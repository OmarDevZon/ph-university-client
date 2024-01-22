import "./App.css";
import { MainLayout } from "./components/layout/MainLayout";
import { Protected } from "./components/protected";

const App = () => {
  return (
    <>
      <Protected>
        <MainLayout />
      </Protected>
    </>
  );
};

export default App;
