import "../Button/style.css"

const Button = ({className, name }) => {
  return (
    <>
    <button className={"orange" && className}>{name || "button"}</button>
    </>
  )
}

export default Button