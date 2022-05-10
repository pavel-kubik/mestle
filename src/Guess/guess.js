import { altitudeComparator, areaComparator, ARROW_DOWN, ARROW_UP, countDirection, districtComparator, populationComparator, regionComparator } from "../Util/util";

const Guess = ({idx, guessedCity, targetCity}) => {

  const valueComparator = (number1, number2) => {
    if (number1 > number2) {
      return ARROW_DOWN;
    } else if (number1 < number2) {
      return ARROW_UP;
    } else {
      return "";
    }
  }

  const regionFilter = (region) => {
    switch (region) {
      case "Jihomoravský": return "Jiho- moravský";
      case "Moravskoslezský": return "Moravsko- slezský";
      case "Královéhradecký": return "Králové- hradecký";
      default: return region;
    }
  }

  return (
    <div>
      <div className='guess-city'>{idx+1}. {guessedCity.name}</div>
      <div className='differences'>
        <div className={`guess district ${regionComparator(guessedCity, targetCity)}`}>
          {regionFilter(guessedCity.region)}
        </div>
        <div className={`guess population ${populationComparator(guessedCity, targetCity)}`}>
          {guessedCity.population}&nbsp;
          {valueComparator(guessedCity.population, targetCity.population)}
        </div>
        <div className={`guess area ${areaComparator(guessedCity, targetCity)}`}>
          {guessedCity.area}&nbsp;
          {valueComparator(guessedCity.area, targetCity.area)}
        </div>
        <div className={`guess altitude ${altitudeComparator(guessedCity, targetCity)}`}>
          {guessedCity.altitude}&nbsp;
          {valueComparator(guessedCity.altitude, targetCity.altitude)}
        </div>
        <div className={`guess direction ${districtComparator(guessedCity, targetCity)}`}>
          {countDirection(guessedCity, targetCity)}
        </div>
      </div>
    </div>
  );
}

export default Guess;
