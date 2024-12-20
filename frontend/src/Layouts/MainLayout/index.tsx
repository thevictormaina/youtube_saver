import { Outlet } from "react-router";
import PageBackground from "../../components/PageBackground";
//import styles from "./main_layout.module.css"
import { subtitle } from "../../styles/fonts.module.css"

export default function MainLayout(){
  return <>
    <Header />
    <Outlet />
    <PageBackground />
  </>
}

function Header(){
  return <header>
    <Logo />
    <h2 className={subtitle}>Simple downloader for your YouTube videos.</h2>
  </header>
}

function Logo(){
  return null
}
