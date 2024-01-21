import React, { useEffect, useState } from "react";
import getShortMenus from "../../../api-gateway/hooks/getShortMenus";

const ListGroup = ({ data }: any) => {
  const [menus, setMenus] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async (menuName: string) => {
  //     try {
  //       await getShortMenus(data.id, menuName, setMenus, setIsLoading);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   data.menus.forEach((menuName: string) => {
  //     fetchData(menuName);
  //   });
  // }, [data]);
  // console.log(menus);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      {isLoading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        data.menus.map((item: any, index: any) => (
          <div key={index}>
            {/* {await getShortMenus(data.id, item, setMenus, setIsLoading)}
            <img src={menus.thumbnaiImange} /> */}
            <p>{item}</p>
          </div>
        ))
      )}
    </div>
    // <ul>{renderedItems}</ul>
  );
};

export default ListGroup;
