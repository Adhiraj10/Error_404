import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeFrame = ({ codeString }) => {
    return (
        <SyntaxHighlighter language="javascript" showLineNumbers="true" style={oneDark}>
            {codeString}
        </SyntaxHighlighter>
    )
}
