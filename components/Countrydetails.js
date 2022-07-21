import classes from "./Countrydetails.module.css";
//import BorderingCountry from "./BorderingCountry";
export default function Countrydetails({ country }) {

  
  const Languages = country[0].languages.map((language, idx) => (
    <span key={idx}>{language.name} </span>
  ));
  /*
  const borderingCountries = country[0].borders ? (
    country[0].borders.map((country, idx) => (
      <BorderingCountry
        key={idx}
        code={country}
      />
    ))
  ) : (
    <p>No borders.</p>
  );
  */
  return (
    <div className={classes.countryDetailPageContainer}>
      <img
        className={classes.Flag}
        src={country[0].flags.png}
        alt="country flag"
        layout="fill"
      />
      <div className={classes.countryDetailContainer}>
        <div className={classes.infoContainer}>
          <h1>{country[0].name}</h1>
          <div className={classes.Columns}>
            <div className={classes.leftColumn}>
              <p>
                <b>Native name: </b>
                {country[0].nativeName}
              </p>
              <p>
                <b>Population: </b>
                {country[0].population}
              </p>
              <p>
                <b>Region: </b>
                {country[0].region}
              </p>
              <p>
                <b>Subregion: </b>
                {country[0].subregion}
              </p>
              <p>
                <b>Capital: </b>
                {country[0].capital}
              </p>
            </div>
            <div className={classes.leftColumn}>
              <p>
                <b>Top level domain: </b>
                {country[0].topLevelDomain[0]}
              </p>
              <p>
                <b>Currency: </b>
                {country[0].currencies[0].name}
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
              
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}
