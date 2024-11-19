import { pageLinks } from "../data"
import PageLink from "./PageLink"

const PageLinks = () => {
  return (
    <ul className="nav-links" id="nav-links">
            {pageLinks.map((link)=>{
        return <PageLink key={link.id} {...link} itemClass="nav-link"/>}
     
    )}
    </ul>

)
}
export default PageLinks