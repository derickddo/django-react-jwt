import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Home from "./components/Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";
const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Home />} path="/" exact />
            </Route>
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
