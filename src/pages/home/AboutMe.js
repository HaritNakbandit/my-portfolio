import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import Profile from "../../assets/images/profile.jpg";
import { Button } from '@mui/material';
import PageWrapper from '../../components/layout/PageWrapper';
import sample from '../../assets/images/bg.mp4';
import Box from '@mui/material/Box';
import Resume from '../../assets/files/resume_2022.pdf';

const Label = styled.p`
 color: black;
 font-size: ${(props) => props.fontSize ? props.fontSize + "px" : "16px"};
 font-weight:${(props) => props.fontWeight} ;
 margin:0;
`;


const AboutMe = () => {
    return (
        <>
            <div style={{ position: "fixed", top: 0, width: " 100%", height: "100%", zIndex: -1 }}>
                <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
            </div>
            <PageWrapper >
                <Grid
                    container
                    direction={{ xs: "column-reverse", md: "row" }}
                    spacing={2}
                    alignItems="center"
                    sx={{ height: { xs: "calc(100vh - 50px)", md: "calc(100vh - 150px)" } }}
                >
                    <Grid
                        item xs={7}
                    >
                        <Box component="div" sx={{ display: "flex", flexDirection: "column", gap: { xs: "5px", md: "15px" } }}>
                            <Label fontSize={40} fontWeight={700}>{"Harit Nakbandit"}<br />{"Frontend Developer"}</Label>
                            <Label fontSize={16} fontWeight={500}>{"I am a frontend developer with 1-year experience, most of my experience is web application development by React. I want to get a good job that can give me permanent income."}</Label>
                            <a href={Resume} download="resume_harit">
                                <Button variant="contained" sx={{ width: "max-content", backgroundColor: "#142850", '&:hover': { backgroundColor: "#142850" }, color: "#fff" }} >{"Resume"}</Button>
                            </a>
                        </Box>
                    </Grid>
                    <Grid
                        item xs={5}
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Box
                            component="img"
                            sx={{
                                height: { xs: 200, md: 250 },
                                width: { xs: 200, md: 250 },
                                borderRadius: "50%",
                                alignItems: "center"
                            }}
                            alt=""
                            src={Profile}
                        />
                    </Grid>
                </Grid>
            </PageWrapper>
        </ >
    );
}

export default AboutMe;
