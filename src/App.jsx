import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import { Main } from "./Pages";
import Users from "./Pages/Users";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid" style={{ backgroundColor: "#282a36" }}>
        <div className="row">
          <SideBar />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/" element={<Main />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
