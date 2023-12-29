import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Read from "views/medicine/Read";
import Update from "views/medicine/Update";
import Read_Prescription from "views/Prescription/Read";
import Update_Prescription from "views/Prescription/Update"
import SigninAuth from "views/Authentication/SigninAuth";
import SignUpAuth from "views/Authentication/SignUpAuth";

const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/authentication/signinAuth" element={<SigninAuth />} />
      <Route path="admin/authentication/signupAuth" element={<SignUpAuth />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="admin/medicine/read/:id" element={<Read />} />
      <Route path="admin/medicine/update/:id" element={<Update />} />
      <Route path="admin/prescription/read/:id" element={<Read_Prescription />} />
      <Route path="admin/prescription/update/:id" element={<Update_Prescription />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin/authentication/signinAuth" replace />} />
    </Routes>
  );
};

export default App;
