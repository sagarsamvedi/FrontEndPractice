// another way to use prop

// const Props = ({name}) =>{
//   <h2>{name}</h2>
// }




const Props = (props) => {
  return <>
    <div className="information">
        <h2>{props.name}</h2>
    </div>
  </>;
};

export default Props;

// Receives a prop (name) and displays it in an <h2> element within a styled div.
// The component is designed to showcase the use of props in React.
// The Props component can be reused with different names by passing the name prop when rendering.