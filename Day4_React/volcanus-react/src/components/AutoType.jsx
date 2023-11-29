import { useEffect } from "react";


const AutoType = () => {
    let text = 'Welcome to My WebSite';
    let count = 0;
    let string = '';
    function autotype(){
        if (count == text.length){
            return
        }
        string += text[count++];
        document.querySelector('.autotype').innerHTML = string;
    }
    useEffect(() => {
        // Use useEffect to run the autotype function at intervals
        const intervalId = setInterval(autotype, 100);
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }); // Empty dependency array to run the effect only once
  return (
    <div className="autotype"></div>
  )
}

export default AutoType