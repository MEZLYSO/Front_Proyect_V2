import { Navigate, Outlet } from "react-router-dom"
import { PublicPages } from "../types/pages"

function PrivateGuard() {
  const token = true
  return token ? <Outlet /> : <Navigate replace to={PublicPages.INDEX} />
}

export default PrivateGuard
