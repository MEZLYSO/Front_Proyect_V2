import { Link } from "react-router-dom"
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PrivatePages } from "../types/pages"

function NavBar() {
  return (
    <nav
      className="bottom-0 fixed h-15 w-full">
      <div className=" h-full flex justify-evenly items-center text-white shadow-2xs bg-white gap-3">
        <Link
          to={PrivatePages.HOME}>
          <FontAwesomeIcon icon={faHome} size="2x" color="black" />
        </Link>
        <Link
          to={PrivatePages.PROFILE}>
          <FontAwesomeIcon icon={faUser} size="2x" color="black" />
        </Link>

      </div>
    </nav>
  )
}

export default NavBar
