import React from "react";

const ErrorPage = props => {

    const { id } = props.match.params;
    var errType;
    switch (id) {
        case "1": errType = "Invaild Movie Id";
        break;
        case "2": errType = "Invaild Review Id";
        break;
        case "3": errType = "No Similar Movie Yet";
        break;
        default: errType = "Something Wrong……";
        break;
    }

    setTimeout(function(){
      window.location.href = `/`;
    },2000);
  
    return (
      <div align="center">
      <h1 align="center">{errType}</h1>   
      <h2 align="center">Return Main Page Soon……</h2>
      </div>
    );
  };
  
  export default ErrorPage;