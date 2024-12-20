import { small } from "../../styles/fonts.module.css"
import { footer } from "./page_footer.module.css"
import classname_concat from "../../utils/classname_concat"

export default function PageFooter() {
  return <footer className={
    classname_concat(footer, small)
  }>
    Designed and developed with <span>❤️</span> by 
    <a href="https://victormaina.com/" target="_blank"> Victor Maina</a>
  </footer>

}

