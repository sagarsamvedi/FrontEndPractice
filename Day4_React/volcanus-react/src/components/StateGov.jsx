import DistrictGov from "./DistrictGov"

const StateGov = ({money}) => {
  return (
    <>
    <div>StateGov</div>
    <DistrictGov money={money}></DistrictGov>
    </>
  )
}

export default StateGov