function LoginAjax(){//login 요청 ajax

}

function Login(){
    console.log("Login");
    return (
    <div>
        login<br/>
        <form action="/login" method="POST">
        id : <input type="text" name="id"></input><br/>
        pw : <input type="text" name="pwd"></input><br/>
        
        <input type="submit"></input>
        </form  >
    </div>);
}
export default Login;
