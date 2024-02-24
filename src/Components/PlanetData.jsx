import { useEffect, useState } from "react";

const PlanetData = (page) => {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://swapi.dev/api/planets/?page=" + page + "&format=json");
        const json = await data.json();
        setPlanetData(json);
      } catch (e) {
        console.log(e.message);
      }
    };

    const timer = setTimeout(fetchData, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [page]);

  return planetData;
};

export default PlanetData;
