import { useEffect, useState } from "react";

const AutoType = (props) => {
  const text = `${props.description}`;
  const [string, setString] = useState('');

  useEffect(() => {
    let count = 0;
    const intervalId = setInterval(() => {
      if (count === text.length) {
        clearInterval(intervalId);
      } else {
        setString((prevString) => prevString + text[count++]);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <p className="autotype">{string}</p>
  );
};

export default AutoType;
