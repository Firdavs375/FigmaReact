import { Link } from "react-router-dom"
import logo1 from "../../assets/logo/Group 1.svg"
import { navbar } from "../../utiels/utiels"
import React from "react"
import Button from "../Button/Button"
import "../Navbar/style.css"
export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="LogoDiv">
          <img src={logo1} alt="svg" />
        </div>
        <div className="Navbar_Right_Box">
          <ul className="List_items">
            {navbar?.map(({ path, name, id }) => {
              return (
                <React.Fragment key={id}>
                  <Link to={path}><li className="list">{name}</li></Link>
                </React.Fragment>
              )
            })}
          </ul>
          <div className="BtnDiv1">
            <Button className={"orange"} name={"Manage Booking"} />
          </div>
        </div>
      </nav>
    </>
  )
}
