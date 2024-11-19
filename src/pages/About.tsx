// The AI code 
import React, { useState } from "react";
import { movies } from '../data/index'

interface Movie {
  title: string;
  releaseDate: string;
  actors: string[];
  rating: number;
  description: string;
}

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredMovies: Movie[] = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex w-full justify-center items-center dark:bg-gray-800">
        <div className="flex relative rounded-md w-full px-4 max-w-xl mb-10">
          <input 
            dir="rtl" 
            onChange={handleSearch}
            value={searchTerm}
            type="text" 
            name="q" 
            id="query" 
            placeholder="اسم الفيلم"
            className="w-full p-3 rounded-md border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500 dark:text-gray-300 dark:border-none" 
          />
          <button
            className="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md">
            <span>search</span>
          </button>
        </div>
      </div>

      <div dir="rtl">
        <p className="text-4xl" >قائمة الأفلام </p>
        <ul>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <li key={index} className="border-solid border-2 border-indigo-600 mt-2 mb-2 p-2">
                <h2 className="font-semibold text-2xl">{movie.title}</h2>
                <p><strong>تاريخ الإصدار:</strong> {movie.releaseDate}</p>
                <p><strong>الممثلون:</strong> {movie.actors.join(', ')}</p>
                <p><strong>التقييم:</strong> {movie.rating}</p>
                <p><strong>الوصف:</strong> {movie.description}</p>
              </li>
            ))
          ) : (
            <p>لا يوجد نتائج</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
