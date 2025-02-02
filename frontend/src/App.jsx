import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Contacts from "./Pages/Contacts";
import Layout from "./layout";
import RegistrationDetails from "./Pages/RegistrationDetails";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/registration" element={<RegistrationDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

