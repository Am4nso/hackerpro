import React, {useEffect} from "react";
import Typed from "typed.js";
import {Link} from "react-router-dom";
import Navigation from "./Navigation";


const Home = () => {
    const el = React.useRef(null);
    const typed = React.useRef(null);

    useEffect(() => {

        const options = {
            strings: [
                'quickly',
                'easily'
            ],
            typeSpeed: 50,
            backSpeed: 100,
            backDelay: 5000,
            loop: true,
        };

        // @ts-ignore
        typed.current = new Typed(el.current!, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            // @ts-ignore
            typed.current!.destroy();
        }
    }, []);

    return (
        <div>
            <Navigation/>
            <div className={"homepage"}>
                <div className={"left"}>
                    <span className={"title"}>Learn Python <span style={{fontWeight: 300}} ref={el}/>.</span>
                    <span
                        className={"description"}>With the power of AI, learning programming will never be boring.</span>
                    <Link style={{color: "white", textDecoration: "none"}} className={"lets-go"} to={"/join"}>Lets go!</Link>
                </div>
                <div className={"right"}>
                </div>
            </div>

            <div id={"how"}>
                <div className={'how-title'}>
                    Easy in one-two-three steps!
                </div>
                <div className={'steps'}>
                    <div className={'step'}>
                        <span>📖</span>
                        <span>Learn</span>
                        <span className={"step-description"}>
                        Read from our collection of free comprehensive articles to learn Python.
                        </span>
                    </div>
                    <div className={'step'}>
                        <span>👨‍💻</span>
                        <span>Answer</span>
                        <span className={"step-description"}>
                        Answer AI-generated questions to test your knowledge, while also collecting points!
                        </span>
                    </div>
                    <div className={'step'}>
                        <span>🏆</span>
                        <span>Reward</span>
                        <span className={"step-description"}>
                        Use your points to claim rewards from the rewards shop!
                        </span>
                    </div>
                </div>
            </div>

            <div id={"about"}>
                <span className={'how-title'}>About Hacker Pro</span>
                <div className={"about-description"}>
                    <p><b>Hacker Pro</b> is the ultimate platform for learning and mastering Python programming language. Our AI-generated coding questions offer an exciting and interactive way to test your skills, earn points, and claim rewards.</p>

                    <p style={{marginBottom: "2rem"}}>With our user-friendly platform, you can access a wide range of coding exercises designed to challenge you and improve your Python knowledge. Earn points by answering questions correctly and redeem them for amazing prizes!</p>
                    <Link to={"/join"} style={{textDecoration: "none", padding: "0.7rem 1rem"}} className={"lets-go"}>Lets go!</Link>

                </div>
            </div>
        </div>
    )
}

export default Home;