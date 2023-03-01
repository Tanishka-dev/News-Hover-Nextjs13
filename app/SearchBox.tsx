"use client";

import { useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  return (
    <form
      className="max-w-6xl mx-auto flex jsutify-be
    items-center"
    >
      <input
        type="text"
        placeholder="Search Keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" disabled={!input}>
        Search
      </button>
    </form>
  );
}

export default SearchBox;
