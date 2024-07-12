import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import { Preloader } from "./components/Preloader";
import { router } from "./routes";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer: any;
    timer = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (true) {
    return <Preloader />;
  }

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
