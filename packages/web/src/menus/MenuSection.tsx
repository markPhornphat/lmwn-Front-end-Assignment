import React from "react";
import ListGroup from "./ListGroup";

const MenuSection = ({ data }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{data.name}</h1>
      <ListGroup data={data} />
      {/* <ul>
        {data != null
          ? data.map((item: any, index: any) => (
              <div>
                <img src={item.coverImage} />
                {item.menus}
              </div>
            ))
          : null}
      </ul> */}
    </div>
  );
};

export default MenuSection;
