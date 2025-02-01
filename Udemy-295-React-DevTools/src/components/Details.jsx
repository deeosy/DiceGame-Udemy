import React from "react";

function Details(props) {
  console.log(props);
  return <p className="info">{props.detailInfo}</p>;
}

export default Details;
