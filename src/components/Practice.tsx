import {useEffect, useState} from "react";
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import {dracula} from "@uiw/codemirror-theme-dracula";
import PracticeNavigation from "./PracticeNavigation";
import { Icon } from '@iconify/react';
import bubbleLoading from '@iconify/icons-eos-icons/bubble-loading';

const Practice = () => {

    const [ready, setReady] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setReady(true);
        }, 5000);

    }, []);

    if (!ready) {
        return (
            <div>

                <PracticeNavigation/>
                <div className={'sign-up'}>
                    <p style={{fontWeight: 500, fontSize: "1.5rem"}}>🤖 Generating a question <Icon icon={bubbleLoading} /></p>
                    <div>

                    </div>
                </div>

            </div>
        )
    }

    return (
        <div>
            <PracticeNavigation/>

            <div className={'practice'}>
                <div className={'question'}>
                    <p style={{fontWeight: 500, fontSize: "1.5rem"}}>🤖 Answer this question</p>
                    <p style={{fontSize: "1.4rem"}}>Write a Python function called <b>count_vowels</b> that takes a string as input and returns the
                        number of vowels in the string. The function should be case-insensitive, meaning that both uppercase
                        and lowercase vowels should be counted. Vowels are defined as the letters A, E, I, O, and U.</p>

                    <div  style={{fontSize: "1.4rem"}}>
                        <p><strong>Input:</strong></p>

                        <div className="input">
                            <pre><code>"Hello, World!"</code></pre>
                        </div>
                    </div>

                    <div  style={{fontSize: "1.4rem"}}>
                        <p><strong>Output:</strong></p>

                        <div className="output">
                            <pre><code>3</code></pre>
                        </div>
                    </div>

                    <p style={{fontSize: "1.1rem"}}>
                        <strong>Having difficulty answering this question?</strong>
                        <br/>
                        <br/>
                        Using AI, we determined weaknesses in the following topics:
                        <ul style={{marginLeft: "1rem"}}><br/>
                            <li>Lesson 3: Lists</li>
                            <li>Lesson 5: For Loops</li>
                        </ul>
                    </p>
                </div>

                <div style={{height: "100vh", maxWidth: "50vh", minWidth: "47%"}} >
                    <CodeMirror
                        className={"code-area"}
                        value="def count_vowels(s: str) -> int:"
                        height="100%"
                        theme={dracula}
                        extensions={[python()]}
                    />
                    <button className={"run-button"}>Run</button>
                </div>

            </div>
        </div>
    )


}

export default Practice;
