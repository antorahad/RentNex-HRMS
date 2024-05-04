import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-bodyColor px-5 text-center">
            <div className="space-y-4 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white"><span className="text-primeColor">404</span> Page Not Found</h1>
                <p className="text-sm text-white">Something might be wrong. Return to <Link to={'/home'} className="text-primeColor underline">Home</Link></p>
            </div>
        </div>
    );
};

export default Error;