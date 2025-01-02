import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function AdminLogin() {
    const [user, setUser] = useState({ userName: "", password: "" });
    const [feedback, setFeedback] = useState("");
    const [isPassword, setIsPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmitData = async (e) => {
        e.preventDefault();
        try {
            const request = await axios.post("http://192.168.100.234:44324/api/AdminLogin", user);

            if (request.data === "dontAllowThisDude119751") {
                setFeedback("Invalid username or password.");
            } else {
                sessionStorage.setItem("authToken", request.data);
                navigate('/dashboard');
            }

        } catch (error) {
            console.error("Error fetching requests data:", error.message);
            throw error; // Rethrow the error for external handling
        }
    }

    const handleChangeInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setFeedback("");
    }

    return (
        <div className="h-[calc(100vh-176px)] flex justify-center items-center font-arimo">
            <div className="w-[40vw] border-2 pb-[2rem] rounded-lg">
                <div className="flex justify-center">
                    <img src="/images/rescueTeamTaguigLogo.png" alt="RescueTeamTaguig Logo" width="80" />
                </div>
                <div>
                    <h1 className="text-center font-rowdies text-xl py-[1rem]">ADMIN LOG IN</h1>
                </div>
                <form>
                    <div className="my-[2rem] justify-self-center">
                        <label htmlFor="username">Username:</label>
                        <input name="userName" onChange={handleChangeInput} value={user.userName} type="text" id="username" className="border-b-2 ml-[1rem]" />
                    </div>
                    <div className="relative my-[2rem] justify-self-center">
                        <label htmlFor="password">Password:</label>
                        <input name="password" onChange={handleChangeInput} value={user.password} type={isPassword ? "text" : "password"} id="password" className="border-b-2 ml-[1rem]" />
                        <div className="absolute right-0 top-0">
                            <button type="button" onClick={(e) => {
                                e.preventDefault();
                                setIsPassword(isPassword => !isPassword)
                            }
                            }>
                                {isPassword ? <RemoveRedEyeIcon className="text-gray-400" /> : <VisibilityOffIcon className="text-gray-400" />}
                            </button>
                        </div>
                    </div>
                    <p className="text-center text-xs font-bold text-red py-[5px]">{feedback}</p>
                    <div className="flex justify-center">
                        <button onClick={handleSubmitData} className="bg-red text-white py-[0.5rem] px-[3rem] rounded-lg mt-[1rem] font-arimo">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;