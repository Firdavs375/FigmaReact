import { Dubai, Jakarta, London, Madrid, Paris, Roma, car1, car2, car3, car4 } from "../assets";
import { BookNowPage } from "../pages/BookNowPage";
import { CarsPage } from "../pages/CarsPage";
import { HomePage } from "../pages/HomePage";
import { TermsConditionsPage } from "../pages/TermConditionPage";
import { Scar1, Scar2, Scar3 } from "../assets"

export const navbar = [
    {
        id: 1,
        path: "/Home",
        element: <HomePage />,
        name: "Home",
    },
    {
        id: 2,
        path: "/Cars",
        element: <CarsPage />,
        name: "Cars",
    },
    {
        id: 3,
        path: "/BookNow",
        element: <BookNowPage />,
        name: "Book Now",
    },
    {
        id: 4,
        path: "/Terms Conditions",
        element: <TermsConditionsPage />,
        name: "Terms and Conditions",
    },
]


export const sectionImageBoxes = [
    {
        hover_top_name: "Supercars",
        hover_bottom_name: "Discover",
        image: car1
    },
    {
        hover_top_name: "Supercars",
        hover_bottom_name: "Discover",
        image: car2
    },
    {
        hover_top_name: "Supercars",
        hover_bottom_name: "Discover",
        image: car3
    },
    {
        hover_top_name: "Supercars",
        hover_bottom_name: "Discover",
        image: car4
    },
]

export const ThereImage = [
    {
        onetext: "Private Charter",
        whotext: "Pinjam Mobil Rent also offers you discreet  and speedy, transfers via helicopter or private planes.",
        image: Scar1
    },
    {
        onetext: "Chauffer Driven Car Rentals",
        whotext: "Our chauffers are professional drivers who provide a discreet, reliable punctual and professional service.",
        image: Scar2
    },
    {
        onetext: "Wedding Car Rentals",
        whotext: "If you want to celebrate your wedding in style and elegance, choose one car from our luxury collection.",
        image: Scar3
    }
]


export const CityBox = [
    {
        img: London,
        CityName: "London",
        CityText: "From $ 669,00 per day"
    },
    {
        img: Madrid,
        CityName: "Madrid",
        CityText: "From $ 799,00 per day"
    },
    {
        img: Paris,
        CityName: "Paris",
        CityText: "From $ 899,00 per day"
    },
    {
        img: Dubai,
        CityName: "Dubai",
        CityText: "From $ 669,00 per day"
    },
    {
        img: Roma,
        CityName: "Roma",
        CityText: "From $ 799,00 per day"
    },
    {
        img: Jakarta,
        CityName: "Jakarta",
        CityText: "From $ 899,00 per day"
    },
]