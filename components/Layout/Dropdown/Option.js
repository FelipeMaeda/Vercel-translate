import React from 'react';

export function DropdownOption({ name, content: content}){
    return (
        <button className="dropdown-option">{name}</button>
    )
};