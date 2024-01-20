import React from "react";

const MenuSection = ({ data }: any) => {
  // const data1 = data.menus.map((menuItem) => menuItem);
  // console.log(data1);
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{data.name}</h1>
      <ul>
        {data != null ? data.menus.map((item: any) => <li>{item}</li>) : null}
      </ul>
    </div>
  );
};

export default MenuSection;
