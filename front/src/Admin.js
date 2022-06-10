import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddAdmin from "./AddAdmin";
import AddProduct from "./AddProduct";
import AdminNav from "./AdminNav";
import EditStock from "./EditStock";
import ManageAdmins from "./ManageAdmins";
import RemoveProduct from "./RemoveProduct";
import Stock from "./Stock";

const Admin = () => {
    return (  
        <div className="admin-container">
            <Router>
                <AdminNav />
                <Routes>
                    <Route path="/admin" element={<Stock />} />
                    <Route path="/editStock/:id" element={<EditStock />} />
                    <Route path="/admin/addProduct" element={<AddProduct />} />
                    <Route path="/admin/removeProduct" element={<RemoveProduct />} />
                    <Route path="/admin/manageAdmins" element={<ManageAdmins />} />
                    <Route path="/admin/addAdmin" element={<AddAdmin />} />
                </Routes>
            </Router>
        </div>
    );
}
 
export default Admin;