import {Link} from 'react-router-dom'

const Routing = () => {
  return (
    <>
    <div className="navbar">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/career'}>Career</Link>
        <Link to={'/contact'}>Contact</Link>
    </div>
    </>
    
  )
}

export default Routing