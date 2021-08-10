import React, { useState, useEffect } from "react";

export const ProfilePage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/", {
      method: "GET",
      Authorization: "Bearer 781bd9f1de084f4daa7ba2aa8a71a2eab855354e",
    }).then((res) => {
      console.log(res);
    });
  }, []);

  return data.map((e) => {
    return <div></div>;
  });
};
