import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Sidebar from "./components/admin/sidebar/Sidebar";
import Topbar from "./components/admin/topbar/Topbar";
import Listcompany from "./components/admin/listcompany/Listcompany";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    // <Container style={{ width: "400px"}}>
    // <Row>
    <Col>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/topbar" element={<Topbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/listcompany" element={<Listcompany />} />
        </Routes>
      </UserAuthContextProvider>
    </Col>
    // </Row>
    // </Container>
  );
}

export default App;
