import Link from "next/link";

import Countrydetails from "../../../components/Countrydetails";
import Navbar from "../../../components/Navbar";
import { baseUrl, fetchApi } from "../../../utils/fetchApi";

export default function CountrydetailPage( {country}) {
  
  
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Link href="/" passHref={true}>
          <a className="back-btn">Go back</a>
        </Link>
          <Countrydetails country={country} />
      </div>
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
