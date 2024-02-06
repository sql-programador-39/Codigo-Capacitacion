import './Nav.css'
import LogoOpa from '../../assets/Logo-opa.png'

const Nav = () => {
  return (
    <>
      <nav>
        <img src={LogoOpa} alt="" />
        <ul className='nav-app'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Productos</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
