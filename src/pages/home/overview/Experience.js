import * as React from 'react';
import { Timeline } from '../../../components/ui';
import BusinessIcon from '@mui/icons-material/Business';
import { useTheme } from '@mui/material/styles';

const Experience = () => {
    const theme = useTheme();

    const data = [
        {
            timeLine: "Nov 2020 - Mar 2021",
            title: "GO venture development co., ltd.",
            detail: "Internship",
            icon: <BusinessIcon sx={{color:theme.palette.text.secondary}}/>
        },
        {
            timeLine: "Apr 2021 - Aug 2021",
            title: "GO venture development co., ltd.",
            detail: "Front-end developer",
            icon: <BusinessIcon sx={{color:theme.palette.text.secondary}}/>
        },
        {
            timeLine: "Sep 2021 - present",
            title: "Vekin (Thailand) co., ltd.",
            detail: "Front-end developer",
            icon: <BusinessIcon sx={{color:theme.palette.text.secondary}}/>
        },
    ]

    return (
        <Timeline data={data} />
    );
}

export default Experience;
