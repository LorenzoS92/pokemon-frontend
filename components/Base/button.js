function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

var Button = function Button(_ref) {
    var children = _ref.children,
        onClick = _ref.onClick,
        styles = _ref.styles,
        props = _objectWithoutProperties(_ref, ['children', 'onClick', 'styles']);

    return React.createElement(
        'button',
        { onClick: onClick, className: styles },
        children || 'label'
    );
};

export default Button;