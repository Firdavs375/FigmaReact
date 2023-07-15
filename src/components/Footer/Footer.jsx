import "../Footer/Style.css"
import logo from "../../assets/logo/Group 1.svg"
import Facebook from "../../assets/img/Facebook.svg"
import Instagram from "../../assets/img/Instagram.svg"
import Youtube from "../../assets/img/youtube.svg"


const Footer = () => {
  return (
    <>

      <footer className="footer">
        <div className="container">

      
        <div className="Logo_Text_Box">
          <img className="logo" src={logo} alt="svg" />
          <p className="text">HKinvision</p>
        </div>
        <div className="Footer_List_Box">
          <div className="FooterRegihtBox">
            <h1 className="hedding">The World's Best Luxury <br /> Car’s Dealing Platform</h1>
          </div>
          <div className="FooterLeftBox">
            <ul className="List_Items">
              <h3 className="hedding2">Company</h3>
              <li className="list">About Us</li>
              <li className="list">Product</li>
              <li className="list">Testimonial</li>
            </ul>
            <ul className="List_Items">
              <h3 className="hedding2">Support</h3>
              <li className="list">FAQ</li>
              <li className="list">Privacy Policy</li>
              <li className="list">Terms of Services</li>
            </ul>
            <ul className="List_Items">
              <h3 className="hedding2">Category</h3>
              <li className="list">Super Cars</li>
              <li className="list">Sport Cars</li>
              <li className="list">More Cars</li>
            </ul>
            <ul className="List_Items2">
              <div className="ImgBox">
                <img src={Facebook} alt="svg" className="ImageFooter" />
              </div>
              <div className="ImgBox a">
              <img src={Instagram} alt="svg" className="ImageFooter" />
              </div>
              <div className="ImgBox a">
              <img src={Youtube} alt="svg" className="ImageFooter" />
              </div>
            </ul>
          </div>
        </div>
        </div>
      </footer>

      <footer className="end">
        <div className="container">

        <h1 className="HeddingEnd">©2022 HKInvestor. All right reserved</h1>
        </div>
      </footer>
    </>
  )
}

export default Footer