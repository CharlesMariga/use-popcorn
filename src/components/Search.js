import { useEffect, useRef } from "react";

export default function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();

    function callBack(e) {
      if (document.activeElement === inputEl.current) return;
      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keypress", callBack);
    return () => document.removeEventListener("keypress", callBack);
  }, [setQuery]);

  return (
    <input
      ref={inputEl}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
