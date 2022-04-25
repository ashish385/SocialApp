import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import  {Share, Favorite, MoreVert, FavoriteBorder, Comment } from "@mui/icons-material";

const Post = () => {
  return (
       <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Jone Doe"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite  sx={{color:"red"}}/>}   />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton aria-label="share">
          <Comment />
        </IconButton>
       
      </CardActions>
      
    </Card>
  )
}

export default Post