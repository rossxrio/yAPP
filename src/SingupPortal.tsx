import { useNavigate } from "react-router-dom";
function SingupPortal() {
    const navigate = useNavigate();
    function goToLogin() {
        navigate("/login");
    }
    return (
        <div className="w-screen h-screen flex gap-5 items-center justify-center bg-blue-950 opacity-70">
            <div className="w-full max-w-2xl min-h-90 rounded-2xl bg-gray-200 shadow-lg shadow-black">
                <div className="w-full h-full flex flex-col mt-15 ml-15 gap-10">
                    <h1 className="bitcount-prop-single block text-9xl">
                        yAPP
                    </h1>
                    <p className="block text-2xl">
                        Let's have a talk!
                    </p>
                </div>
            </div>
            <div className="w-full max-w-sm min-h-90 rounded-2xl bg-gray-200 shadow-lg shadow-black">
                <div className="w-full h-full flex flex-col justify-center items-center mt-10 gap-5">
                    <h1 className="font-bold text-2xl">
                        CREATE AN ACCOUNT
                    </h1>
                    <div className="w-2/3 h-full flex flex-col items-center gap-3">
                        <input className="w-full h-8 bg-gray-300 shadow-2xl rounded-md border-2 placeholder:text-gray-500 placeholder:italic placeholder:p-2 placeholder:text-sm" placeholder="E-mail" type="text" />
                        <input className="w-full h-8 bg-gray-300 shadow-2xl rounded-md border-2 placeholder:text-gray-500 placeholder:italic placeholder:p-2 placeholder:text-sm" placeholder="User alias" type="text" />
                        <input className="w-full h-8 bg-gray-300 shadow-2xl rounded-md border-2 placeholder:text-gray-500 placeholder:italic placeholder:p-2 placeholder:text-sm " placeholder="Password" type="password" />
                        <button className="w-1/2 h-8 bg-gray-300 shadow-2xl rounded-md border-2 cursor-pointer" type="submit">Create account</button>
                        <button onClick={goToLogin}><span>Or log in</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SingupPortal