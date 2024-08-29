"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
function Page() {
    const [email, setEmail] = useState("");
    const router = useRouter();
    const handleClick = () => {
        router.push(`/id/${email}`);
    };
    return (
        <div className="grid place-items-center min-h-screen bg-black">
            <div className="flex">
                <input
                    type="text"
                    className="border-[1px] border-white p-2 bg-black text-white focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    onClick={handleClick}
                    className="p-2 text-black bg-white"
                >
                    Get My Id
                </button>
            </div>
        </div>
    );
}

export default Page;
