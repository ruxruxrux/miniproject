import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import Login from './Login';

// 세션 체크 함수
function checkSession() {

  const isLoggedIn = localStorage.getItem('jwtToken'); // login 체크
  //localStorage.removeItem('jwtToken'); //강제로 세션 정보 삭제
  
  if (isLoggedIn) { // login 되어 있으면 (세션에 토큰이 있으면)
    console.log(isLoggedIn);

    //main 화면으로
    return <Main/>;
  } else {
    //localStorage.setItem('jwtToken','kkk');

    //login 화면으로
    return <Login/>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {checkSession()}
  </React.StrictMode>
);