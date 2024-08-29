"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Page() {
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleClick = () => {
        if (!email) {
            alert("Please enter a valid email address");
            return;
        }
        router.push(`/id/${email}`);
    };

    return (
        <div className="relative grid place-items-center min-h-screen bg-[#634752] px-4">
            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="absolute top-4 left-4 p-2 text-[#fff6e0] border-[1px] border-[#fff6e0] rounded hover:bg-[#fff6e0] hover:text-[#634752] transition-colors duration-300"
            >
                Back
            </button>

            <div className="flex custom-460:flex-row flex-col custom-460:gap-0 gap-2 space-x-2 mb-6">
                <input
                    type="text"
                    placeholder="Enter referral code"
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
        </div>
    );
}

export default Page;
