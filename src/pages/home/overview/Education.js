import * as React from 'react';
import { Timeline } from '../../../components/ui';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
    const data = [
        {
            timeLine: "2007 - 2010",
            title: "Nakhon sawan school",
            detail: "General",
            icon: <SchoolIcon />
        },
        {
            timeLine: "2011 - 2014",
            title: "Khlongkhlung Ratrangsan School",
            detail: "Science - Mathematics",
            icon: <SchoolIcon />
        },
        {
            timeLine: "2017 - 2021",
            title: "Rajamangala University of Technology Suvarnabhumi",
            detail: "Information Technology",
            icon: <SchoolIcon />
        },
    ]

    return (
        <Timeline data={data} />
    );
}

export default Education;
