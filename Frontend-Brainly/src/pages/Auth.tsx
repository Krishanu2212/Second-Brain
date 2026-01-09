import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import axios from "axios";
import { BackendURL } from "../config";
import { useNavigate } from "react-router-dom";

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function auth() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const confirmPassword = confirmPasswordRef.current?.value;

        if(type === 'signup') {
            try {
                const response = await axios.post(`${BackendURL}/api/v1/signup`, {
                    username: username,
                    password: password,
                    confirmPassword: confirmPassword
                })
                console.log(response);
                alert(response.data.msg);
                navigate('/signin');
            } catch(error) {
                if(axios.isAxiosError(error)) {
                    if(error.response) alert(error.response.data.msg);
                }
            }
        } else if(type === 'signin') {
            try {
                const response = await axios.post(`${BackendURL}/api/v1/signin`, {
                    username: username,
                    password: password,
                })
                console.log(response);
                const jwt = response.data.token;
                localStorage.setItem("token", jwt);
                alert(response.data.msg);
                navigate('/dashboard');
            } catch(error) {
                if(axios.isAxiosError(error)) {
                    if(error.response) alert(error.response.data.msg);
                }
            }
        }
        // alert(type === 'signup' ? "You have SIGNED UP" : "You have SIGNED IN");
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="rounded-xl bg-white border border-gray-300 min-w-48 p-4">
                <div className="mx-auto w-fit text-xl font-semibold text-purple-600">{`${type === 'signup' ? "SIGNUP" : "SIGNIN"}`}</div>
                <Input ref={usernameRef} type="text" name="Username:" placeholder="Enter Username..."/>
                <Input ref={passwordRef}  type="password" name="Password:" placeholder="Enter Password..."/>
                {type === 'signup' ? <Input ref={confirmPasswordRef}  type="password" name="Confirm Password:" placeholder="Confirm Password..."/> : null}
                <div className="flex justify-center p-4"><Button loading={false} variant="primary" text={`${type === 'signup' ? "Signup" : "Signin"}`} size="md" onClick={auth} fullWidth={true}/></div>
                {type === 'signup' ? <div className="justify-self-center">Already have an account? <a href="/signin" className="text-purple-600">Signin</a></div> : <div className="justify-self-center">Don't have an account? <a href="/signup" className="text-purple-600">Signup</a></div>}

            </div>
        </div>
    )
}