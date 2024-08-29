import React from "react"
import { TbBrandX } from "react-icons/tb"
import { PiLinkedinLogoFill } from "react-icons/pi"

export const TwitterShareButton = ({referral}) => {
    const textToShare = `🚀 Thrilled to join Hackodisha 4.0 by Webwiz NIT Rourkela! 💻🔥 Check out my ID card and join the hackathon using my referral code ${referral} for rewards!`
    const ISSERVER = typeof window === "undefined"
    let urlToShare = "";

    if (!ISSERVER) {
         urlToShare = window.location.href
    }

    const hashtags =
        "Hackodisha4,WebwizNITRKL,Hackathon2024,DevelopersLife,InnovationChallenge,WomenInTech"

    const handleTwitterShareClick = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            textToShare
        )}%0A%0A&url=${encodeURIComponent(
            urlToShare
        )}%0A%0A&hashtags=${encodeURIComponent(hashtags)}`
        window.open(twitterUrl, "_blank")
    }

    return (
        <button onClick={handleTwitterShareClick}>
            Share on <TbBrandX className="inline" />
        </button>
    )
}

export const LinkedInShareButton = () => {
    const title = "Join Hackodisha 4.0 by Webwiz NIT Rourkela!"
    const summary = `🚀 I'm excited to be part of Hackodisha 4.0! Check out my ID card and join the hackathon for an amazing experience!`
    const ISSERVER = typeof window === "undefined"
    let urlToShare = ""

    if (!ISSERVER) {
        urlToShare = window.location.href
    }

    const handleLinkedInShareClick = () => {
        const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            urlToShare
        )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
            summary
        )}`
        window.open(linkedinUrl, "_blank")
    }

    return (
        <button onClick={handleLinkedInShareClick}>
            Share on <PiLinkedinLogoFill className="inline h-6 w-6" />
        </button>
    )
}
