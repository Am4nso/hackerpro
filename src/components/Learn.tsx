import PracticeNavigation from "./PracticeNavigation";

const Learn = () => {
    return (
        <div>
            <PracticeNavigation/>
            <div style={{color: "white"}}>
                <p style={{margin: "1rem 0", fontSize: "1.5rem"}}><b>📚 Learn Python</b></p>
                <div style={{display:"flex", gap: "5rem"}}>
                    <div style={{marginBottom: "2rem"}}>
                        <p className={"lesson selected"}>Lesson 1</p>
                        <p className={"lesson"}>Lesson 2</p>
                        <p className={"lesson"}>Lesson 3</p>
                        <p className={"lesson"}>Lesson 4</p>
                        <p className={"lesson"}>Lesson 5</p>
                        <p className={"lesson"}>Lesson 6</p>
                    </div>
                    <div>
                        <p><b>Lesson 1: Introduction to Python</b></p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Learn;