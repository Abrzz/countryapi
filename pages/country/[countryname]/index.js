import Link from "next/link";

import Countrydetails from "../../../components/Countrydetails";
import Navbar from "../../../components/Navbar";
import { baseUrl, fetchApi } from "../../../utils/fetchApi";

export default function CountrydetailPage( {country}) {
  
  
  return (
    <>
      <Navbar />
      <Countrydetails country={country} />
    </>
  );
}

export async function getServerSideProps( {params: { countryname }}) {

  const data = await fetchApi(`${baseUrl}/alpha/${countryname}`)

  return {
    props : {
      country : data
    }
  }
}
