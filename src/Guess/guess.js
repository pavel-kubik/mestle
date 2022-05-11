import { altitudeComparator, areaComparator, ARROW_COMPASS, ARROW_DOWN, ARROW_UP, countDirection, CROSS, districtComparator, LESS_ARROW, MORE_ARROW, populationComparator, regionComparator } from "../Util/util";
import compass90 from '../img/compass90.png';

const Guess = ({idx, guessedCity, targetCity}) => {

  const valueComparator = (number1, number2) => {
    if (number1 > number2) {
      return <div className="less-guess">{LESS_ARROW}</div>;
    } else if (number1 < number2) {
      return <div className="more-guess">{MORE_ARROW}</div>;
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
        <div
          className={`guess population ${populationComparator(guessedCity, targetCity)}`}>
          {guessedCity.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          {valueComparator(guessedCity.population, targetCity.population)}
        </div>
        <div className={`guess area ${areaComparator(guessedCity, targetCity)}`}>
          {Math.trunc(guessedCity.area)} km²
          {valueComparator(guessedCity.area, targetCity.area)}
        </div>
        <div className={`guess altitude ${altitudeComparator(guessedCity, targetCity)}`}>
          {guessedCity.altitude} m.n.m.
          {valueComparator(guessedCity.altitude, targetCity.altitude)}
        </div>
        <div
          className={`guess direction`}
          style={{ backgroundImage: `url(${compass90})`}}
        >
          <div className={`guess direction compass ${countDirection(guessedCity, targetCity)}`}>{countDirection(guessedCity, targetCity) === 'X' ? CROSS : ARROW_COMPASS}</div>
        </div>
      </div>
    </div>
  );
}

export default Guess;
