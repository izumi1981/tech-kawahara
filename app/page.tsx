import Link from 'next/link'
import Image from 'next/image'
import heroPic from "../public/images/banner.png"
import profilePic from "../public/images/mono.png"

export const metadata = {
    title: "Abe Hiroki",
    description: "Abe Hirokiのポートフォリオサイトです",
}

const Index = () => {
  return (
    <>
        <div className="hero">
            <Image src={heroPic} alt="hero" />
            <div className="textContainer">
                <h1>tech kawahara!</h1>
                <h3>TypeScript Developer</h3>
            </div>
        </div>
        <div className="container">
            <div className="profile">
                <div>
                    <h2>TypeScript Nerd</h2>
                    <p>tech-kawahara was spun out from Kawahara Gakuen by Yoshiki Izumi. Yoshiki specialized in JavaScript, but after joining Kawahara Gakuen, he specialized in TypeScript. Miss. Mitani asked me to create an AR site, so I created this site. I plan to write technical articles in the future.</p>
                </div>
                <div>
                    <Image src={profilePic} alt="hero" />
                </div>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <div className="skillsContainer">
                    <div><img src="/images/javascript.svg" alt="javascript"/><span>JavaScript / 10 years</span></div>
                    <div><img src="/images/react.svg"alt="react"/><span>React / 1 years</span></div>
                    <div><img src="/images/ts.png" alt="ts"/><span>TypeScript / 1 years</span></div>
                    <div><img src="/images/next.svg" alt="next"/><span>Next.JS / 1 years</span></div>
                </div>
            </div>

            {/* <div className="ctaButton">
                <Link href="/contact">Make It Happen!</Link>
            </div> */}

        </div>
    </>
  )
}

export default Index