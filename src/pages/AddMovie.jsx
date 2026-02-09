
import React, { useState } from "react";
const AddMovie = ({ onAdd }) => {
  const [title,setTitle] = useState("");
  const [year,setYear] = useState("");
  const [poster,setPoster] = useState("");
  const [language,setLanguage] = useState("English");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({id:Date.now(),title,year,poster,watched:false,language});
    setTitle(""); setYear(""); setPoster(""); setLanguage("English");
    alert("Movie added!");
  };
  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Movie Title" value={title} onChange={e=>setTitle(e.target.value)} required />
        <input type="number" placeholder="Release Year" value={year} onChange={e=>setYear(e.target.value)} required />
        <input type="text" placeholder="Poster URL (optional)" value={poster} onChange={e=>setPoster(e.target.value)} />
        <select value={language} onChange={e=>setLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
        </select>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};
export default AddMovie;
