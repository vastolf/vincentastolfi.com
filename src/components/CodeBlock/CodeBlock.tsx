import React, { useState, useRef, useEffect } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark';
import SVGIcon from '../SVGIcon/SVGIcon';
import './styles.css'

const CodeBlock = (props: { children: string, className: string }) => {
    const {children, className} = props
    const codeBlockRef = useRef<HTMLDivElement>(null)
    const [expanded, setExpanded] = useState<boolean>(false)
    const language = className?.replace(/language-/, '') || ""

    const handleExpandToggle = () => {
      setExpanded(!expanded)
    }

    const handleClickOutside = (event: Event) => {
      if (!codeBlockRef?.current?.contains(event.target as Node)) {
        setExpanded(false)
      }
    }

    useEffect(() => {
      document.addEventListener("click", handleClickOutside, false)
      document.addEventListener("focusout", handleClickOutside, false)
      return () => {
        document.removeEventListener("click", handleClickOutside, false)
        document.removeEventListener("focusout", handleClickOutside, false)
      };
    }, []);

    return (
      <div className={`code-block__wrapper code-block__wrapper-${language}` + (expanded ? ' code-block__wrapper-expanded' : '')}>
        <div className={'code-block' + (expanded ? ' code-block__expanded' : '')} ref={codeBlockRef}>
          <div className="code-block__header">
            <div className="code-block__lang">
              <SVGIcon className="code-block__lang-icon" name={language} />
              <span>{language}</span>
            </div>
            <button className="code-block__expand-toggle" onClick={handleExpandToggle}>
              <span>{expanded ? "Close" : "Expand"}</span>
            </button>
          </div>
          <Highlight {...defaultProps}
              code={children}
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
        </div>
      </div>
    )
}

export default CodeBlock