import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import Profile from "../../assets/images/profile.jpg";
import { Label } from '../../components/ui'
import { Button } from '@mui/material';
import PageWrapper from '../../components/layout/PageWrapper';
import sample from '../../assets/images/bg.mp4';
import Box from '@mui/material/Box';

const ImgProfile = styled.img`
  height:250px;
  width:250px;  
  border-radius: 50%;
  align-items: center;
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
                            <Label fontSize={44} fontWeight={700}>{"Harit Nakbandit"}<br />{"Frontend Developer"}</Label>
                            <Label>{"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}</Label>
                            <Button variant="contained" sx={{ width: "max-content", backgroundColor: "#142850" }}>{"Resume"}</Button>
                        </Box>
                    </Grid>
                    <Grid
                        item xs={5}
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <ImgProfile src={Profile} alt={""} />
                    </Grid>
                </Grid>
            </PageWrapper>
        </ >
    );
}

export default AboutMe;
