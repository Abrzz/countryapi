import Navbar from "../components/Navbar";
import Countrycard from "../components/Countrycard";
import { fetchApi,baseUrl } from "../utils/fetchApi";

export default function App( { countries }) {
  
const countrylist = countries.map((country, id) =>  <Countrycard key={id} name={country.name} population={country.population} capital={country.capital} region={country.region} img={country.flags["png"]}/>)
  
return (
    <>
        <Navbar />
        <div className="main-container">
            <div className="flag-container">
                {countrylist}
            </div>
        </div>
    </>
    );
}

export async function getStaticProps() {

  const countries = await fetchApi(`${baseUrl}/all`)
  
  return {
    props: {
      countries: countries
    }
  }
}
