import {useRouter} from "next/router"
export default function Dropdown({ visible }) {
  const regions = ["Europe","Asia","Americas","Africa","Oceania"]
  const router = useRouter()
  return (
    <ul className={`dropdown ${!visible && "hidden"}`}>
      { 
        regions.map(region => 
        <div className="choice-container">
          <li onClick={ () => router.push(`/region/${region}`)}> {region} </li>
        </div>
        )
      }
    </ul>
  );
}
