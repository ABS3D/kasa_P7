import { useEffect, useState } from "react";

export function useApartments() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/db.json", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        setApartments(data);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Erreur de récupération des apparts :", error);
        }
      });

    return () => controller.abort();
  }, []);

  return apartments;
}
