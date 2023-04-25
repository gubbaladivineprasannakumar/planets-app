// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props

  return (
    <div data-testid="planets" className="planet-item-container">
      <img
        className="planet-image"
        alt={planetDetails.name}
        src={planetDetails.imageUrl}
      />
      <h1>{planetDetails.name}</h1>
      <p>{planetDetails.description}</p>
    </div>
  )
}
export default PlanetItem
