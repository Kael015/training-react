import React from 'react'

function Card({data}) {
    console.log(data);
  return (
    <div className="max-w-sm rounded shadow-lg">
        <img className="w-full" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{data.original_title}</div>
    <p className="text-gray-700 text-base">
      {data.overview}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{data.original_language}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{data.popularity}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{data.release_date}</span>
  </div>
        </div>
  )
}

export default Card