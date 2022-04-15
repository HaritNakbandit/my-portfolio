import React from 'react';
import MuiTimeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

const Timeline = (props) => {
    const { data } = props;

    return (
        <MuiTimeline position="alternate">
            {data?.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        {index === 0 &&
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                >
                                    {item.timeLine}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ backgroundColor: "#142850" }}>
                                        {item.icon}
                                    </TimelineDot>
                                    <TimelineConnector sx={{ bgcolor: "#142850" }} />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        {item.title}
                                    </Typography>
                                    <Typography>{item.detail}</Typography>
                                </TimelineContent>
                            </TimelineItem>}
                        {(index !== 0 && index !== data.length - 1) &&
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                >
                                    {item.timeLine}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ bgcolor: "#142850" }} />
                                    <TimelineDot sx={{ backgroundColor: "#142850" }} >
                                        {item.icon}
                                    </TimelineDot>
                                    <TimelineConnector sx={{ bgcolor: "#142850" }} />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        {item.title}
                                    </Typography>
                                    <Typography>{item.detail}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        }
                        {index === data.length - 1 &&
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                >
                                    {item.timeLine}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ bgcolor: "#142850" }} />
                                    <TimelineDot sx={{ backgroundColor: "#142850" }} >
                                        {item.icon}
                                    </TimelineDot>
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        {item.title}
                                    </Typography>
                                    <Typography>{item.detail}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        }
                    </React.Fragment>
                )
            })}
        </MuiTimeline>
    );
}

export default Timeline;
