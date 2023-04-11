import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Pekanbaru",
    },
    {
      id: 2,
      title: "Jakarta",
    },
    {
      id: 3,
      title: "Bandung",
    },
    {
      id: 4,
      title: "Yogyakarta",
    },
    {
      id: 5,
      title: "Bali",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
