import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center gap-8">
            <div className="text-5xl font-bold text-purple-600 font-serif">SECOND BRAIN APPLICATION</div>

            <div className="flex gap-4">
                <div className="w-96"><Button size="lg" variant="primary" text="SIGNUP" onClick={() => navigate('/signup')} fullWidth={true}/></div>
                <div className="w-96"><Button size="lg" variant="primary" text="SIGNIN" onClick={() => navigate('/signin')} fullWidth={true}/></div>
            </div>

        </div>
    )
}