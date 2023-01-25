import { Box, Typography, useTheme, useMediaQuery } from "@mui/material"
import Form from "./Form"

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px")

    return <Box>
            <Box 
                width="100%" 
                backgroundColor={theme.palette.background.alt}
                p="1rem 6%"
                textAlign="center"
                >
                     <Box display="flex" justifyContent="center" gap="5px" alignItems="center">
                        <img src="assets/bird.png" alt="DailyHub Logo" width="40px" />
                        <Typography 
                            fontWeight="bold" 
                            fontSize="32px"
                            color="primary"
                            > DailyHub 
                        </Typography>
                    </Box>
                </Box>
                <Box 
                width={isNonMobileScreens ? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
                >
                    <Typography fontWeight="500" variant="h5" sx={{mb: "1.5rem"}}>
                        Welcome to DailyHub, you daily hub for daily stuff!
                    </Typography>

                    <Typography fontWeight="400" textAlign="center" color="#777733" borderRadius="10px" p="6px" backgroundColor="#ffffbbbb" variant="h6" sx={{mb: "1.5rem"}}>
                       Please, don't use your actual email or reuse a password of your own, this website doesn't contain advanced security standards! <br/>
                       Use a <a href="https://temp-mail.org/en/" target="_blank" rel="noreferrer">Temp-Mail</a> email generator.
                    </Typography>
                    <Form/>
            </Box>
    </Box>

}

export default LoginPage