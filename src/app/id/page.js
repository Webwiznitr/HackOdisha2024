"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

function Page() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        if (!email) {
            alert("Please enter a valid email address");
            return;
        }
        try {
            const uid = await fetchUser();
            if (uid) {
                router.push(`/id/${uid}`);
            } else {
                alert("User not found");
            }
        } catch {
            alert("User not found");
        }
    };

    const fetchUser = async () => {
        setLoading(true);
        try {
            const res = await axios.post(
                process.env.NEXT_PUBLIC_API_URL + "/user",
                {
                    email: email,
                }
            );
            const userData = res.data.user;
            return userData._id;
        } catch (error) {
            console.log(error);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#634752] px-4">
            <button
                onClick={() => router.back()}
                className="absolute top-4 left-4 p-2 text-[#fff6e0] border-[1px] border-[#fff6e0] rounded hover:bg-[#fff6e0] hover:text-[#634752] transition-colors duration-300"
            >
                Back
            </button>

            <div className="flex custom-460:flex-row flex-col custom-460:gap-0 gap-2 space-x-2 mb-6">
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="custom-460:w-64 p-2 border border-[#fff6e0] rounded bg-[#fff6e0] text-[#634752] focus:outline-none focus:ring-2 focus:ring-[#e56e00]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    onClick={handleClick}
                    className="p-2 px-4 bg-[#e56e00] text-[#fff6e0] rounded hover:bg-[#634752] hover:text-[#fff6e0] transition hover:border-[#e56e00] border-2"
                >
                    Get My ID Card
                </button>
            </div>

            <div className="text-[#fff6e0] mb-6 text-center">
                It may take up to 24 hours (at max) to show new registrations.
                Please be patient.
            </div>

            {loading && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="p-4 bg-[#fff6e0] text-[#634752] rounded">
                        Loading...
                    </div>
                </div>
            )}
        </div>
    );
}

export default Page;
