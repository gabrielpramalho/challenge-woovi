import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function AppLayout() {
  return(
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}