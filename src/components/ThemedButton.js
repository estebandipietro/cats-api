import { useContext } from 'react';
import { ThemeContext } from '../theme-context';

const ThemedButton = (props) => {

    const buttonStyle = {
        height: '50px',
        fontSize: '20px',
        borderRadius: '10px',
        padding: '10px',
        border: '1px solid #665656',
        cursor: 'pointer',
        boxShadow: '0 3px 3px 2px rgb(0 0 0 / 20%)',
        outline: 'none',
    };
    
    const theme = useContext(ThemeContext);
    return (
        <button {...props} style={{ ...buttonStyle, backgroundColor: theme.background, color: theme.foreground }}>Toggle to change button background</button>
    );
} 

export default ThemedButton;