
import { useNavigate } from "react-router-dom";

const Navigate = () => {
    const navigate = useNavigate()
  return (
    <>
    <div onClick={()=>
        navigate('/')
    } className="btn btn-warning">Navigate to Home</div>
    </>
  )
}

export default Navigate