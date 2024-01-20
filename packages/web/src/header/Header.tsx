import React, { useEffect, useState } from "react";
import getRestaurantInfo from "../../../api-gateway/hooks/getRestaurantInfo";

export default function Header({ image }: any) {
  // const restuarantId = 567051;
  // const [data, setData] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  // interface dataProp {
  //   name: string;
  //   id: number;
  //   coverImage: string;
  //   menus: string[];
  //   activeTimePeriod: {
  //     open: string;
  //     close: string;
  //   };
  // }

  return (
    <div>
      <img
        src={image}
        style={{
          maxWidth: "100%",
          height: "30vh",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
