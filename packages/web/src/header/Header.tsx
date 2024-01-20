import React, { useEffect, useState } from "react";
import getRestaurantInfo from "../../../api-gateway/hooks/getRestaurantInfo";

export default function Header({ image: string }) {
  const restuarantId = 567051;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
  // useEffect(() => {
  //   const fetchingData = getRestaurantInfo(restuarantId, setData, setIsLoading);
  // }, []);
  // console.log(data);
  return (
    <div>
      {!isLoading && <p>Hi</p>}
      {/* <img src="/" /> */}
    </div>
  );
}
