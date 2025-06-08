import AppBar2 from "@/components/layout/layout2/Appbar";
import { Outlet } from "react-router-dom";

export default function Layout2() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <AppBar2 />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
}
