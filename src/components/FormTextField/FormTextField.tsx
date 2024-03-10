import React, { ChangeEventHandler, useState } from 'react'
import SVGIcon from '../SVGIcon/SVGIcon'
import './styles.css'

type FormTextFieldType = "text" | "textarea";

interface IFormTextFieldProps {
    type?: FormTextFieldType,
    label: string,
    name: string,
    errorMessage: string,
    value: string,
    valid: boolean,
    required?: boolean,
    onTextInputChange?: ChangeEventHandler<HTMLInputElement>,
    onTextAreaChange?: ChangeEventHandler<HTMLTextAreaElement>,
    disabled?: boolean
}


const FormTextField: React.FC<IFormTextFieldProps> = ({type = "text", label, name, errorMessage, value, valid, required = false, onTextInputChange, onTextAreaChange, disabled = false}) => {
    return (
        <label className={"form-text-field"+(valid ? "" : " form-text-field__invalid")} htmlFor={name}>
            <div className="form-text-field__text">
                <span>{label}{required ? <sup>*</sup> : ""}</span>
                {(valid && value.length > 0) &&
                    <SVGIcon className="form-text-field__valid-icon" name="check" />
                }
                {!valid && <span className="form-text-field__error">{errorMessage}</span>}
            </div>
            {type == "text" &&
                <input
                    className="form-text-field__field"
                    type="text"
                    name={name}
                    id={name}
                    value={value}
                    required={required}
                    onChange={onTextInputChange}
                    disabled={disabled}
                    aria-invalid={!valid}
                />
            }
            {type == "textarea" &&
                <textarea
                    className="form-text-field__textarea"
                    id={name}
                    name={name}
                    required={required}
                    value={value}
                    onChange={onTextAreaChange}
                    disabled={disabled}
                    aria-invalid={!valid}
                >
                </textarea>
            }
        </label>
    )
}

export default FormTextField