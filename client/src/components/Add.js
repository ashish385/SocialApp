import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import {DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"



const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom:"20px"
})

const Add = () => {

    const [open, setOpen] = useState(false)

  return (
      <>
          <Tooltip onClick={(e) =>setOpen(true)}
              title="Create a Post"
              sx={{
                  position: "fixed",
                  bottom: 20,
                  left:{xs:"calc(50% - 25px)", md: 30}
              }}
          >
              <Fab color='primary' aria-label='add'>
                  <AddIcon />
              </Fab>
          </Tooltip>
          <StyleModal
            open={open}
            onClose={(e) =>setOpen(false) }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280}  p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
                  <Typography variant='h6' color='gray' textAlign='center' >Create a post</Typography>
                  <UserBox>
                      <Avatar
                          src='https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg'
                          sx={{width: 30, height: 30}}
                      />
                      <Typography variant='span' fontWeight={500}>
                          John Doe
                      </Typography>
                  </UserBox>
                  <TextField
                      sx={{width:"100%"}}
                      id="standard-multiline-static"
                      multiline
                      rows={2}
                      placeholder="What's on your mind?"
                      variant="standard"
                  />
                  <Stack direction='row' gap={2} mt={2} mb={2} >
                    <EmojiEmotions color='primary' cursor="pointer"/>
                    <Image color='secondary' />
                    <VideoCameraBack color='success' />
                    <PersonAdd color='error' />
                  </Stack>
                  <ButtonGroup
                      fullWidth
                      variant="contained"
                      aria-label="outlined primary button group">
                    <Button >Post</Button>
                    <Button sx={{width:"100px"}}><DateRange /></Button>
                </ButtonGroup>
            </Box>
          </StyleModal>
          
      </>
  )
}

export default Add