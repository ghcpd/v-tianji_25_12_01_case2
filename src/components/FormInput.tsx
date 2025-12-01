import { InputHTMLAttributes, forwardRef } from 'react'
import './FormInput.css'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="form-input-group">
        {label && (
          <label className="form-input-label" htmlFor={props.id}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`form-input ${error ? 'error' : ''} ${className || ''}`}
          {...props}
        />
        {error && <span className="form-input-error">{error}</span>}
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'

export default FormInput

