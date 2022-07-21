import Navbar from "../../../components/Navbar";
import Countrycard from "../../../components/Countrycard";
import { fetchApi,baseUrl } from "../../../utils/fetchApi";
import Searcharea from "../../../components/Searcharea";
export default function App( { countries }) {
  
const countrylist = countries.map((country, id) =>  <Countrycard key={id} code = {country.alpha3Code} name={country.name} population={country.population} capital={country.capital} region={country.region} img={country.flags["png"]}/>)
  
return (
    <>
        <Navbar />
        <div className="main-container">
            <Searcharea />
            <div className="flag-container">
                {countrylist}
            </div>
        </div>
    </>
    );
}

export async function getServerSideProps( {params : {region}}) {

  const countries = await fetchApi(`${baseUrl}/region/${region}`)
  
  return {
    props: {
      countries: countries
    }
  }
}
