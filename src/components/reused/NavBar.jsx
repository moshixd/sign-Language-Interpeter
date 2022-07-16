import '../css/NavBar.css'
import logo from './Logo.png'

const NavBar = ({nav, icon}) => {



  return (
    <>
    <div className='container'>
        {/* Icon */}
        <div className='picture'>
          <img id="logo-picture"src={logo} alt='logo'/>
        </div>
        <div className='icon'>
            {icon ? <button> Home</button> : ''}
        </div>
        {/* Title */}
        <h3 className='title'>Lost In Translation</h3>    
        {/* Profile Button */}
        <div className='nav'>
            {nav ? <button className='button button1'>{nav}</button> : ''}
        </div>
    </div>
    </>
  )
}

export default NavBar