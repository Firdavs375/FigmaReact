import React from "react"
import { Navigate, Route, Router, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { navbar } from "./utiels/utiels"
// import { motion, useScroll, useSpring } from "framer-motion";
import "./index.css"

const App = () => {

  // const { scrollYProgress } = useScroll()

  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });

  return (

    <>

    {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}

      <Navbar />
      <Routes>
        {navbar?.map(({ path, element, id }) => {
          return (
            <React.Fragment key={id}>
              <Route path={path} element={element} />
              <Route path="*" element={<h1>404 Page Not Found</h1>} />
              <Route path="/" element={<Navigate to={"/home"} />} />
            </React.Fragment>
          )
        })}
      </Routes>
    </>
  )
}

export default App