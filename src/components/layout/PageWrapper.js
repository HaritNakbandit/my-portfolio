import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



const PageWrapper = (props) => {
    const { children, id, backgroundColor } = props;

    return (
        <div id={id} style={{ backgroundColor: backgroundColor }} >
            <Box
                sx={{
                    padding: { xs: "5px 0", md: "50px" },
                }}
            >
                <Container>
                    {children}
                </Container>
            </Box>
        </div  >
    );
}

export default PageWrapper;
