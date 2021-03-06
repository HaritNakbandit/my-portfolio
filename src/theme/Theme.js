import React, { useState, useMemo, createContext, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const Theme = (props) => {

    const { children } = props;

    const [mode, setMode] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                localStorage.setItem('theme', localStorage.getItem('theme') === 'light' ? 'dark' : 'light');
                setMode(localStorage.getItem('theme'));
            },
        }),
        [],
    );

    useEffect(() => {
        localStorage.setItem('theme', mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'light'
                        ? {
                            // palette values for light mode
                            primary: {
                                main: '#142850',
                            },
                            divider: '#142850',
                            background: {
                                default: '#EDF7FA',
                                paper: '#ffffff',
                            },
                            text: {
                                primary: '#000000',
                                secondary: '#ffffff',
                            },
                        }
                        : {
                            // palette values for dark mode
                            primary: {
                                main: '#ffffff',
                            },
                            divider: '#ffffff',
                            background: {
                                default: '#202124',
                                paper: '#171717',
                            },
                            text: {
                                primary: '#ffffff',
                                secondary: '#000000',
                            },
                        }),
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default Theme;
