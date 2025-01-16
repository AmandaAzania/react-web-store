import React from 'react';

const InputField = ({ label, type, name, value, onChange, error }) => {
    return (
        <div className="input-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={label}
                required
            />
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default InputField;
