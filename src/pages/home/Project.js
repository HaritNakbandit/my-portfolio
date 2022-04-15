import PageWrapper from '../../components/layout/PageWrapper';
import { Label } from '../../components/ui'
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Jaray from '../../assets/images/jaray.PNG';

const ImgContent = styled.img`
  height:180px;
  width:250px;  
  align-items: center;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
`;

const ContentYear = styled.div`
  width:max-content;
  padding: 2px 10px;
  border-radius: 16px;
  background-color:#142850;
  color: #ffffff;
`;

const LineBottom = styled.hr`
 border-top: 0px;
 border-bottom:1px solid #E0E0E0;
`;

const Project = () => {
    const data = [{
        img: Jaray,
        title: "Jaray Complaint Management System (JCOMS)",
        year: "2021",
        tool: "React.js, MUI",
        link: "http://www.jcoms.police.go.th/",
        detail: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }]
    return (
        <PageWrapper id="project" backgroundColor={"#ffffff"}>
            <Label fontSize={44} fontWeight={700}>Project</Label>
            {data.map((item, index) => (
                <div key={index}>
                    <Grid
                        container
                        direction={{ xs: "column-reverse", sm: "row", md: "row" }}
                        spacing={2}
                        style={{ marginTop: "1rem" }}
                    >
                        <Grid
                            item xs={3}
                        >
                            <ImgContent src={item.img} alt="" onClick={() => window.open(item.link)} />
                        </Grid>
                        <Grid
                            container
                            item xs={5}
                            direction={{ xs: "column" }}
                        >
                            <Box component="div" sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                <Label fontSize={30} fontWeight={700}>{item.title}</Label>
                                <Box component="div" sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
                                    <ContentYear><Label fontSize={18} fontWeight={500}>{item.year}</Label></ContentYear>
                                    <Label fontSize={18} fontWeight={500}>{item.tool}</Label>
                                </Box>
                                <Label >{item.detail}</Label>
                            </Box>
                        </Grid>
                    </Grid>
                    <LineBottom />
                </div>
            ))}
        </PageWrapper>
    );
}

export default Project;
