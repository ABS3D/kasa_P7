import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useApartment() {
  const [apartment, setApartment] = useState(null);
  const location = useLocation();
  const apartmentId = location.state?.apartmentId;

  useEffect(() => {
    const controller = new AbortController();

    fetch("/db.json", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((apt) => apt.id === apartmentId);
        setApartment(found);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Erreur de récupération de l'appart :", error);
        }
      });

    return () => controller.abort();
  }, [apartmentId]);

  return apartment;
}
