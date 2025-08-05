import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';

export default function ClientThemeWrapper({children}){
    const {theme} = useContext(ThemeContext)
    return <div data-theme={theme}>{children}</div>
}