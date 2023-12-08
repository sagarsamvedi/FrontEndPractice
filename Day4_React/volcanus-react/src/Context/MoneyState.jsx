import MoneyContext from "./MoneyContext"

const MoneyState = (props) => {
    const money = 1000;
    const name = 'Sagar'
  return (
    <MoneyContext.Provider value={{money,name}}>
        {props.children}
    </MoneyContext.Provider>
  )
}

export default MoneyState