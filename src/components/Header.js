import React from "react";

const Header = (props) => {
  //   function renderLink() {
  //     const nickname = props.nickname;
  //     if (nickname) {
  //       return (
  //         <span className="nickname">
  //           <i className="far fa-user"></i>
  //           {props.nickname}
  //         </span>
  //       );
  // } else {
  //   return (
  //     <React.Fragment>
  //       <a href="">Login</a>
  //       <a href="">Register</a>
  //     </React.Fragment>
  //   );
  // }
  return (
    <div className="header">
      <div className="grid">
        <div className="start">
          <a href="">Home</a>
        </div>
        <div className="end">
          {props.nickname ? (
            <span className="nickname">
              <i className="far fa-user"></i>
              {props.nickname}
            </span>
          ) : (
            <React.Fragment>
              <a href="">Login</a>
              <a href="">Register</a>
            </React.Fragment>
          )}

          {/* {renderLink()} */}
          {/* <a href="">Login</a>
          <a href="">Register</a>
          <span className="nickname">{props.nickname}</span> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
