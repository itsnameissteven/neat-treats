var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
var Input = function (_a) {
    var value = _a.value, placeholder = _a.placeholder, onChange = _a.onChange, name = _a.name, id = _a.id, className = _a.className, label = _a.label, errorMessage = _a.errorMessage, rest = __rest(_a, ["value", "placeholder", "onChange", "name", "id", "className", "label", "errorMessage"]);
    var labelRef = useRef(null);
    var _b = useState(0), legendWidth = _b[0], setLegendWidth = _b[1];
    var _c = useState(false), isInFocus = _c[0], setIsInFocus = _c[1];
    useEffect(function () {
        if (labelRef.current) {
            setLegendWidth(labelRef.current.offsetWidth);
        }
    }, []);
    var labelClass = classnames('neat-input__label', {
        'neat-input__label--with-content': value.length,
    });
    var fieldSetClass = classnames('neat-input', "".concat(className), {
        'neat-input__error': !!errorMessage,
    });
    var width = isInFocus || value.length ? "".concat(legendWidth, "px") : '0px';
    return (React.createElement("fieldset", { className: fieldSetClass },
        label && (React.createElement(React.Fragment, null,
            React.createElement("legend", { style: { width: width } }),
            React.createElement("label", { ref: labelRef, className: labelClass }, label))),
        React.createElement("input", __assign({ className: "neat-input__input", placeholder: placeholder, value: value, onChange: onChange, name: name, id: id, onBlur: function () { return setIsInFocus(false); }, onFocus: function () { return setIsInFocus(true); } }, rest)),
        !!errorMessage && (React.createElement("p", { className: "neat-input__error-msg" }, errorMessage))));
};
export default Input;
