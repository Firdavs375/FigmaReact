import icon from "../../assets/img/kichik Car.svg"
import Location from "../../assets/img/Location.svg"
import { CityBox } from "../../utiels/utiels"
import "../Section2/style.css"
import React from "react"
const Section2 = () => {
  return (
    <>
      <section className="Section4">
        <div className="containerS2">
          <h1 className="hedding3">Popular Destination <br /> for Car Rentals</h1>
          <div className="CardBoxDiv">
            {CityBox?.map(({ CityName, CityText, img }, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="carBox3">
                    <img src={img} alt="svg" className="States" />
                    <div className="TextDivBox">
                      <h1 className="NameCity">{CityName}</h1>
                      <p className="CityText">Car hire in 75 pick-up locations</p>
                      <div className="IconTextDiv">
                        <img src={icon} alt="svg" className="IconCaR" />
                        <p className="Text1">{CityText}</p>
                      </div>
                      <p className="endText">Search rental cars in {CityName}</p>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </section>

      <section>
        <h1 className="LocationText">Location</h1>
        <div className="LocationDiv">
          <img className="Location" src={Location} alt="svg" />
        </div>
      </section>
    </>
  )
}

export default Section2