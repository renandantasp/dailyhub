import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined
} from '@mui/icons-material'
import { Box, Typography, Divider, useTheme } from '@mui/material'
import UserImage from "components/UserImage"
import FlexBetween from 'components/FlexBetween'
import WidgetWrapper from 'components/WidgetWrapper'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const UserWidget = ({userId, picturePath}) => {
    const user = useSelector ((state) => state.user)
    const { palette} = useTheme()
    const navigate = useNavigate()
    const dark = palette.neutral.dark
    const medium = palette.neutral.medium
    const main = palette.neutral.main

    const {
        firstName,
        lastName,
        location,
        occupation,
        viewedProfile,
        impressions,
    } = user

    return (
        <WidgetWrapper>
            <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                onClick={()=>navigate(`/profile/${userId}`)}
            >
                <FlexBetween gap="1rem">
                    <UserImage image={picturePath} />
                    <Box>
                        <Typography
                            variant="h4"
                            color={dark}
                            fontWeight="500"
                            sx={{
                                "&:hover":{
                                    color: palette.primary.light,
                                    cursor:"pointer"
                                }
                            }}>
                                {firstName} {lastName}
                            </Typography>
                            <Typography color={medium}>{user?.friends.length} friends</Typography>
                    </Box>

                </FlexBetween>
                <ManageAccountsOutlined sx={{"&: hover": {cursor: "pointer"}}}/>
            </FlexBetween>
                
                <Divider/>

                <Box p="1rem 0">
                    <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                        <LocationOnOutlined fontSize="large" sx={{color: main}} />
                        <Typography color="medium"> {location} </Typography>
                    </Box>
                </Box>

                <Box p="1rem 0">
                    <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                        <WorkOutlineOutlined fontSize="large" sx={{color: main}} />
                        <Typography color="medium"> {occupation} </Typography>
                    </Box>
                </Box>

                <Box>
                    <FlexBetween mb="0.5rem">
                        <Typography color={medium}>Who's viewed your profile</Typography>
                        <Typography color={main} fontWeight="500">{viewedProfile}</Typography>
                    </FlexBetween>

                    <FlexBetween mb="0.5rem">
                        <Typography color={medium}>Impressions of your post</Typography>
                        <Typography color={main} fontWeight="500">{impressions}</Typography>
                    </FlexBetween>
                </Box>

                <Box>
                    <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
                        Social profiles
                    </Typography>

                    <FlexBetween gap="1rem" mb="0.5rem">
                            <FlexBetween gap="1rem">
                                <img src="../assets/twitter.png" alt="Twitter" />
                                <Box>
                                    <Typography color={main} fontWeight="500">Twitter</Typography>
                                    <Typography color={medium} >Social Network</Typography>
                                </Box>
                            </FlexBetween>
                            <EditOutlined sx={{color: main}} />
                    </FlexBetween>

                    <FlexBetween gap="1rem">
                            <FlexBetween gap="1rem">
                                <img src="../assets/linkedin.png" alt="Linkedin" />
                                <Box>
                                    <Typography color={main} fontWeight="500">Linkedin</Typography>
                                    <Typography color={medium} >Network Platform</Typography>
                                </Box>
                            </FlexBetween>
                            <EditOutlined sx={{color: main}} />
                    </FlexBetween>

                </Box>
        </WidgetWrapper>
    )

}

export default UserWidget