import Counter from "./netedComponents/Counter"
import Logo from "./netedComponents/Logo"

function Header() {
  return (
    <header className="col-[1/3] row-[1/2] bg-[#f1d4b3bc] border-b border-black/[0.08] items-center  flex justify-between">
      <Logo />
      <Counter />
    </header>
  )
}

export default Header