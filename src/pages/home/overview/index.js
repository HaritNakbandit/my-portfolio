import React, { useState } from 'react';
import { Label } from '../../../components/ui';
import PageWrapper from '../../../components/layout/PageWrapper';
import MuiTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Education from './Education';
import Experience from './Experience';

const Tabs = styled(MuiTabs)`
 & .Mui-selected: {
     color: #142850;
  }
`;

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

    const onChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <PageWrapper id={"overview"} backgroundColor={"#EDF7FA"}>
            <Label fontSize={44} fontWeight={700}>Overview</Label>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={onChange}
                    TabIndicatorProps={{
                        sx: {
                            backgroundColor: '#142850',
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
