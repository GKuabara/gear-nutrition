import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminNav from "./AdminNav";
import EditStock from "./EditStock";
import Stock from "./Stock";

const Admin = () => {
    return (  
        <div className="admin-container">
            <Router>
                <AdminNav />
                <Routes>
                    <Route path="/admin" element={<Stock />} />
                    <Route path="/editStock/:id" element={<EditStock />} />
                </Routes>
            </Router>
        </div>
    );
}
 
export default Admin;