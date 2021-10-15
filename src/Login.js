import React,{useState, useEffect} from 'react';
import "./Login.css";


const Login = () => {
    const [username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    useEffect(() => {
        handleSubmit();
    });

    const handleSubmit = async() => {
        let live = {username,password};
        console.log(live);
        const url = "http://localhost:3000/api"
        let result = await fetch(url,{
            method:'POST',
            headers: {
                "Content-Type":"application.json",
                "Accept":'application/json'
            },
            body:JSON.stringify(live)
        }).then((res) => res.json());

        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))

    }

    return (
        <div>
            Hello Login Page<br />
            <input type="text" placeholder="Username" onChange={(e)=> setUsername(e.target.value)}  /> <br />
            <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login
