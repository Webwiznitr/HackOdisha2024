"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function Page() {
    const [referralCode, setReferralCode] = useState("");
    const [referrals, setReferrals] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        setLoading(true);
        try {
            console.log(referralCode);
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/user/getUserReferral`,
                { referralCode }
            );
            setReferrals(response.data.referredUsers);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#634752] p-4">
            <div className="flex custom-460:flex-row flex-col custom-460:gap-0 gap-2 space-x-2 mb-6">
                <input
                    type="text"
                    placeholder="Enter referral code"
                    className="custom-460:w-64 p-2 border border-[#fff6e0] rounded bg-[#fff6e0] text-[#634752] focus:outline-none focus:ring-2 focus:ring-[#e56e00]"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                />
                <button
                    onClick={handleClick}
                    className="p-2 px-4 bg-[#e56e00] text-[#fff6e0] rounded hover:bg-[#634752] hover:text-[#fff6e0] transition hover:border-[#e56e00] border-2"
                >
                    Get My Referrals
                </button>
            </div>

            {loading && (
                <div className="flex justify-center items-center mb-6">
                    <div className="w-8 h-8 border-4 border-t-transparent border-[#e56e00] rounded-full animate-spin"></div>
                </div>
            )}

            {!loading && (
                <div className="text-[#fff6e0] mb-6 text-center">
                    It may take up to 24 hours (at max) to show new
                    registrations. Please be patient.
                </div>
            )}

            <div className="w-full max-w-lg">
                {referrals.length > 0 ? (
                    <div className="bg-[#fff6e0] p-4 rounded shadow-md">
                        <h1 className="text-lg text-[#634752] font-semibold mb-4">
                            Referrals ({referrals.length})
                        </h1>
                        <ul className="space-y-2 h-[50vh] overflow-auto">
                            {referrals.map((referral) => (
                                <li
                                    key={referral._id}
                                    className="p-3 bg-[#e56e00] rounded"
                                >
                                    <p className="text-[#fff6e0]">
                                        {referral.firstName} {referral.lastName}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    !loading && (
                        <p className="text-[#fff6e0] text-center">
                            No referrals found.
                        </p>
                    )
                )}
            </div>

            <button
                onClick={() => router.push("/")}
                className="mt-8 p-1 px-3 bg-[#e56e00] text-[#fff6e0] rounded hover:bg-[#634752] hover:text-[#fff6e0] transition hover:border-[#e56e00] border-2 absolute top-2 left-12 text-2xl flex items-center gap-2"
            >
                <span className="text-[15px]">Back</span>
            </button>
        </div>
    );
}

export default Page;
