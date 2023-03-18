import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

const CodeFrame = ({ code }) => {

    return (
        <div>
            <CopyBlock
                text={`bc lawda code`}
                language={'javascript'}
                showLineNumbers={true}
                theme={dracula}
                codeBlock
            />
        </div>
    )
}

export default CodeFrame;
