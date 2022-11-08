import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark';

const CodeHighlight = (props: { code: string, language: Language }) => {
    const {code, language} = props
    
    return (
        <Highlight {...defaultProps}
            code={code}
            language={language}
            theme={vsDark}
        >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ ...style }}>
            {tokens.map((line, index) => {
                const lineProps = getLineProps({ line, key: index })
                return (
                <div key={index} {...lineProps}>
                    {line.map((token, key) => (
                    <span key={key}{...getTokenProps({ token, key })} />
                    ))}
                </div>
                )
            }
            )}
            </pre>
        )}
        </Highlight>
    )
}

export default CodeHighlight