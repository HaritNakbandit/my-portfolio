import * as React from 'react';
import { Timeline } from '../../../components/ui';
import SchoolIcon from '@mui/icons-material/School';
import { useTheme } from '@mui/material/styles';

const Education = () => {
    const theme = useTheme();

    const data = [
        {
            timeLine: "2007 - 2010",
            title: "Nakhon sawan school",
            detail: "General",
            icon: <SchoolIcon sx={{ color: theme.palette.text.secondary }} />
        },
        {
            timeLine: "2011 - 2014",
            title: "Khlongkhlung Ratrangsan School",
            detail: "Science - Mathematics",
            icon: <SchoolIcon sx={{ color: theme.palette.text.secondary }} />
        },
        {
            timeLine: "2017 - 2021",
            title: "Rajamangala University of Technology Suvarnabhumi",
            detail: "Information Technology",
            icon: <SchoolIcon sx={{ color: theme.palette.text.secondary }} />
        },
    ]

    return (
        <Timeline data={data} />
    );
}

export default Education;
