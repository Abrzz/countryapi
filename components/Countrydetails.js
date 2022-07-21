import classes from "./Countrydetails.module.css";
import BorderingCountry from "./BorderingCountry";
export default function Countrydetails({ country }) {

  
  const Languages = country.languages.map((language, idx) => (
    <span key={idx}>{language.name} </span>
  ));
  
  const borderingCountries = country.borders ? (
    country.borders.map((country, idx) => (
      <BorderingCountry
        key={idx}
        code={country}
      />
    ))
  ) : (
    <p>No borders.</p>
  );
  
 
  return (
    <div className={classes.countryDetailPageContainer}>
      <img
        className={classes.Flag}
        src={country.flags.png}
        alt="country flag"
        layout="fill"
      />
      <div className={classes.countryDetailContainer}>
        <div className={classes.infoContainer}>
          <h1>{country.name}</h1>
          <div className={classes.Columns}>
            <div className={classes.leftColumn}>
              <p>
                <b>Native name: </b>
                {country.nativeName}
              </p>
              <p>
                <b>Population: </b>
                {country.population}
              </p>
              <p>
                <b>Region: </b>
                {country.region}
              </p>
              <p>
                <b>Subregion: </b>
                {country.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {country.capital}
              </p>
            </div>
            <div className={classes.leftColumn}>
              <p>
                <b>Top level domain: </b>
                {country.topLevelDomain[0]}
              </p>
              <p>
                <b>Currency: </b>
                {country.currencies[0].name}
              </p>
              <p>
                <b>Languages: </b>
                {Languages}
              </p>
            </div>
          </div>
          <div />
          <div className={classes.borderingCountries}>
            <b>Bordering countries: </b>
            <div className={classes.borderingCountriesList}>
              {borderingCountries}
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}
