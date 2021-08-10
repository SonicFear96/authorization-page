import React, { useState, useEffect } from "react";

export const ProfilePage = () => {
  const [data, setData] = useState([]);

  //data
  useEffect(() => {
    fetch("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/", {
      method: "GET",
      headers: {
        Authorization: "Token 781bd9f1de084f4daa7ba2aa8a71a2eab855354e",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);

  return (
    <>
      {data.map((el) => {
        return (
          <div>
            <p>
              {el.id} {el.username} {el.first_name} {el.last_name}
              {el.is_active}
            </p>
          </div>
        );
      })}
    </>
  );
};
