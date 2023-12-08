import { useContext } from 'react'
import moneyContext from '../Context/MoneyContext'
const People = () => {
  console.log(useContext(moneyContext))
  return (
    <div>People</div>
  )
}

export default People