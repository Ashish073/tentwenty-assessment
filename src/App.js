import React from "react";
import RootLayout from "./layout/RootLayout";
import RootRouter from "./routes/RootRouter";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <RootLayout>
          <RootRouter />
        </RootLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
