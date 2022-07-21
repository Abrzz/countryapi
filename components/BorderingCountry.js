import Link from "next/link";
import classes from "./BorderingCountry.module.css";

export default function BorderingCountry(props) {
  return (
    <Link href={`/country/${props.code}`} passHref={true}>
      <a
        className={classes.countryButton}
      >
        {props.code}
      </a>
    </Link>
  );
}
