import React, { useState, useRef, useEffect, Ref, RefObject } from 'react'
import './styles.css'

const PopContainer = (props: {
        children: JSX.Element | JSX.Element[],
        expanded: boolean,
        setExpanded: React.Dispatch<React.SetStateAction<boolean>> 
    }) => {
    const {children, expanded, setExpanded} = props
    const popContainerRef = useRef<HTMLDivElement>(null)

    const handleClickOutside = (event: Event) => {
      if (!popContainerRef?.current?.contains(event.target as Node)) {
        setExpanded(false)
      }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false)
        document.addEventListener("focusout", handleClickOutside, false)
        
        return () => {
            document.removeEventListener("click", handleClickOutside, false)
            document.removeEventListener("focusout", handleClickOutside, false)
        }
    }, []);

    return (
      <div className={`pop-container__wrapper` + (expanded ? ' pop-container__wrapper-expanded' : '')}>
        <div className="prop-container" ref={popContainerRef}>{children}</div>
      </div>
    )
}

export default PopContainer