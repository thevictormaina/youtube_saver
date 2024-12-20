import { Outlet } from "react-router";
import PageBackground from "../../components/PageBackground";
import PageFooter from "../../components/PageFooter"
import PageHeader from "../../components/PageHeader";
import { outer, inner } from "./main_layout.module.css";

export default function MainLayout() {
  return <div className={outer}>
  <div className={inner}>
    <PageHeader />
    <Outlet />
  </div>
    <PageFooter />
    <PageBackground />
  </div>
}

