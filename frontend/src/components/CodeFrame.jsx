import { CodeBlock, dracula } from "react-code-blocks";

const CodeFrame = () => {
    return (
        <CodeBlock
            text={'<script src="http://localhost:4000/api/sendScript"></script>'}
            language='javascript'
            showLineNumbers={false}
            theme={dracula}
            codeBlock
        />
    )
}

export default CodeFrame;
