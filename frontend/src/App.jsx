import "./App.css";
import "./stylesheets/Fonts.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Contacts from "./Pages/Contacts";
import RegistrationDetails from "./Pages/RegistrationDetails";
import Track from "./Pages/Track";  
import Committee from "./Pages/Committee";
import Layout from "./Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tracks" element={<Track />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/registration" element={<RegistrationDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
