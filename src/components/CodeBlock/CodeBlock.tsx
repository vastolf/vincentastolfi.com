import React, { useState, useRef, useEffect } from 'react'
import PopContainer from '../PopContainer/PopContainer';
import CodeHighlight from '../CodeHighlight/CodeHighlight';
import SVGIcon from '../SVGIcon/SVGIcon';
import { Language } from 'prism-react-renderer'
import './styles.css'

const CodeBlock = (props: { children: string, className: string }) => {
    const {children, className} = props
    const [expanded, setExpanded] = useState<boolean>(false)
    const [copied, setCopied] = useState<boolean>(false)
    const language = className?.replace(/language-/, '') || ""

    const handleCopy = async () : Promise<void> => {
      setCopied(true)
      try {
        await navigator.clipboard.writeText(children);
      } catch (err) {
        setCopied(false)
      }
      setTimeout(() : void => {
        setCopied(false)
      }, 2500)
    }

    return (
      <PopContainer expanded={expanded} setExpanded={setExpanded}>
        <div className={`code-block code-block__language-${language}${expanded ? ' code-block__expanded' : ''}`}>
          <div className="code-block__header">
            <div className="code-block__lang">
              <SVGIcon className="code-block__lang-icon" name={language} />
              <span>{language}</span>
            </div>
            <button className="code-block__button" onClick={() => setExpanded(!expanded)}>
              <span>{expanded ? "Close" : "Expand"}</span>
              <SVGIcon className="code-block__button-icon" name={expanded ? "close" : "code"} />
            </button>
            <button className="code-block__copy" onClick={handleCopy}>
              <SVGIcon className="code-block__copy-icon" name={copied ? 'check' : 'copy'} />
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          <CodeHighlight code={children} language={language} />
        </div>
      </PopContainer>
    )
}

export default CodeBlock