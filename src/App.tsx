import { RouterProvider } from "react-router-dom";

import "./App.css";
import { router } from "./routes";

const App: React.FC = () => {
 

  return (
    <div>
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
    </div>
  );
};

export default App;
