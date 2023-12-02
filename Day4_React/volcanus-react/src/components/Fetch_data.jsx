import { useState } from "react"
import { useEffect } from "react"


const Fetch_data = () => {

    const [dataArray, setDataArray] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setDataArray(data))
    },[]);
    
  return (
    <>
        {
           dataArray.map((data) => (
            <div className="tasks" key={data.id}>
                <div className="container" style={{alignItems:'center'}}>
                    <h2>{data.id}.</h2>
                    <h1>{data.title}</h1>
                </div>
            </div>
           ))
        }

    </>
  )
}

export default Fetch_data