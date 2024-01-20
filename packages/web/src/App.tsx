import { useEffect, useState } from "react";
import Header from "./header/Header";
import getRestaurantInfo from "../../api-gateway/hooks/getRestaurantInfo";

interface dataProp {
  name: string;
  id: number;
  coverImage: string;
  menus: string[];
  activeTimePeriod: {
    open: string;
    close: string;
  };
}

function App() {
  const restuarantId = 567051;
  const [data, setData] = useState<dataProp | {}>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRestaurantInfo(restuarantId, setData, setIsLoading);
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data ? (
            <>
              <h1>{data.coverImage}</h1>
              <Header image={data.coverImage} />
            </>
          ) : (
            <p>Data is null or undefined</p>
          )}
        </>
      )}
    </div>
  );
}

export default App;
