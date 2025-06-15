import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import PageWrapper from "./PageWrapper"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import { PrivatePages } from "../types/pages"
import PrivateGuard from "../guards/PrivateGuard"

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname} >
        <Route element={<PrivateGuard />}>
          <Route
            path={PrivatePages.HOME}
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>} />
          <Route
            path={PrivatePages.PROFILE}
            element={
              <PageWrapper>
                <Profile />
              </PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes
