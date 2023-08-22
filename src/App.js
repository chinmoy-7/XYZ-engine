import "./App.css";
import { FormContextProvider } from "./context/contextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Table } from "./component/Table";

import { MainForm } from "./component/MainForm";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <FormContextProvider>
          <Routes>
            {/* <Route path="/" element={<Form1 />} /> */}
            <Route path="/" element={<MainForm />} />
            <Route path="/result" element={<Table />} />
            
          </Routes>
      </FormContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
