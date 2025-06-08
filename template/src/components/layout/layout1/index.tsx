// import { Card, CardContent } from "";
import Sidebar from "./Sidebar";
import AppBar from "./AppBar";
import { Outlet } from "react-router-dom";

export default function Layout1() {
  return (
    <div className="flex min-h-screen gap-4">
      <Sidebar />
      <div className="flex-1">
        <AppBar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
