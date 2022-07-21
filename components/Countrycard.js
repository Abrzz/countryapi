import Link from "next/link";
export default function Countrycard(props) {
  return (
    <Link href={`/name/${props.name}`}>
      <div className="card-container">
        <img
          className="card-flag"
          src={props.img}
          alt="country flag"
          layout="fill"
        />
        <div className="card-info">
          <h3>{props.name}</h3>
          <p>
            <b>Population:</b> {props.population}
          </p>
          <p>
            <b>Region:</b> {props.region}
          </p>
          <p>
            <b>Capital:</b>
            {props.capital}
          </p>
        </div>
      </div>
    </Link>
  );
}
