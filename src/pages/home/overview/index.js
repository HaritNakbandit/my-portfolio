import React, { useState } from 'react';
import { Label } from '../../../components/ui';
import PageWrapper from '../../../components/layout/PageWrapper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Education from './Education';
import Experience from './Experience';
import { useTheme } from '@mui/material/styles';


const TabPanel = (props) => {
    const { children, value, index, ...other } = props;


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Overview = () => {
    const [value, setValue] = useState(0);
    const theme = useTheme();

    const onChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <PageWrapper id={"overview"} backgroundColor={theme.palette.background.default}>
            <Label fontSize={44} fontWeight={700}>Overview</Label>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={onChange}
                    sx={{ color: theme.palette.text.primary }}
                    TabIndicatorProps={{
                        sx: {
                            backgroundColor: theme.palette.divider,
                        },
                    }}
                    textColor="inherit"
                >
                    <Tab label="Experience" {...a11yProps(0)} />
                    <Tab label="Education" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Experience />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Education />
            </TabPanel>
        </PageWrapper >
    );
}

export default Overview;
