import { useEffect, useState } from "react";
import Header from "./header/Header";
import getRestaurantInfo from "../../api-gateway/hooks/getRestaurantInfo";
import FlatList from "flatlist-react/lib";
import MenuSection from "./menus/MenuSection";

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
  const [data, setData] = useState({}); //<dataProp | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRestaurantInfo(restuarantId, setData, setIsLoading);
  }, []);

  return (
    <div>
      {isLoading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <div>
          {console.log("Finish Fetching")}
          {/* {console.log(data)} */}
          <Header image={data.coverImage} />
          <MenuSection data={data} />
        </div>
      )}
    </div>
  );
}

export default App;
