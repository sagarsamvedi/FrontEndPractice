import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Routing = () => {
  const location = useLocation()
  return (
    <>
    {
      <div className="navbar">
        {location.pathname !== '/' && <Link to="/">Products</Link>}
        {location.pathname !== '/about' && <Link to="/about">About</Link>}
        {location.pathname !== '/career' && <Link to="/career">Career</Link>}
        {location.pathname !== '/contact' && <Link to="/contact">Contact</Link>}
    </div>
    }
    </>
    
  )
}

export default Routing