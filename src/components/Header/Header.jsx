import { car } from "../../assets"
import Button from "../Button/Button"
import "../Header/style.css"
// import image1 from "../../assets/img/moshina.svg"
const Header = () => {
    return (
        <header>
            <div className="Header_left">
                <h1 className="heder1">The World's Best Luxury Car Deals</h1>
                <p className="text1">HKinvestor can provide rentals of the most exclusive cars <br /> like Ferrari and Lamborghini.</p>
                <div className="Btn_Div1">
                    <Button className={"orange"} name={"Buy Now"} />
                    <Button className={"orange_secondary"} name={"Video Introduction"} />
                </div>
                <div className="Header_Left_Bottom_Box">
                    <div className="Text_box_one">
                        <h1 className="Heder2">500+</h1>
                        <p className="text2">Luxury Cars</p>
                    </div>
                    <div className="Text_box_one">
                        <h1 className="Heder2">#1</h1>
                        <p className="text2">Best Deal Car</p>
                    </div>
                </div>
            </div>
            <div className="Heager_Regiht">
                <div className="imageDiv">
                    <img className="Image1" src={car} alt="svg" />
                </div>
            </div>
        </header>
    )
}

export default Header