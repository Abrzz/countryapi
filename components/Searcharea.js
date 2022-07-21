import Dropdown from "./Dropdown";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Searcharea() {
  const [visibility, setVisibility] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter()
  
  function handleClick() {
    setVisibility(!visibility);
  }
  
  
  function handleSubmit(e) {
    e.preventDefault()
    router.push(`/name/${searchInput}`)
  }
  return (
    <div className="search-area-container">
      <form className="input-area" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search by country name..."
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        ></input>
        <button type="">Search</button>
      </form>
      <div className="filter-area">
        <div className="filter" onClick={() => handleClick()}>
          <b>Filter by region:</b>{" "}
        </div>
        <Dropdown visible={visibility} />
      </div>
    </div>
  );
}
