import React from 'react';

var Input = function Input(_ref) {
    var placeholder = _ref.placeholder,
        onInput = _ref.onInput,
        styles = _ref.styles,
        type = _ref.type,
        name = _ref.name,
        ariaLabel = _ref.ariaLabel;

    return React.createElement('input', { 'aria-label': ariaLabel, name: name, type: type, placeholder: placeholder, onInput: onInput, className: styles });
};

export default Input;