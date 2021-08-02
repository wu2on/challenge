import React from "react";

export const List = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <ul>
      {data ? (
        data.map((item, i) => {
          return (
            <li key={i}>
              {item.label}
              {item.children && <List data={item.children} key={item.id} />}
            </li>
          );
        })
      ) : (
        <li>
          {data.label}
          {data.children && <List data={data.children} key={data.id} />}
        </li>
      )}
    </ul>
  );
};
