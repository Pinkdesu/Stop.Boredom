import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75"
  },
  iconHover: {
    color: "#ff3d47"
  }
})(Rating);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginBottom: "20px",
    borderRadius: "4px",
    boxShadow: "0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const NewsPost = ({ id, values }) => {
  const classes = useStyles();
  const data = [
    {
      iconText: "П",
      miniDescription:
        'Парк "Парк" открылся после рестоврации! Только 28 февраля в парке будет выступать группа "ЛСП ", не пропусти!'
    },
    {
      iconText: "K",
      miniDescription:
        'Кафе "Кафе" организует ужин под открытым небом с живой музыкой!'
    },
    {
      iconText: "C",
      miniDescription:
        "Синема Парк встречает жителей на ночь кино! Все билеты на фильмы по 100р!"
    },
    {
      iconText: "C",
      miniDescription:
        "Синема Парк встречает жителей на ночь кино! Все билеты на фильмы по 100р!"
    }
  ];
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {data[id - 1].iconText}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={values[0].name}
        subheader="Февраль 29, 2020"
      />
      <CardMedia
        className={classes.media}
        image={`http://project/public/${values[0].image}`}
        title={values.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data[id - 1].miniDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <StyledRating
            name="customized-color"
            defaultValue={2}
            getLabelText={value => `${value} Heart${value !== 1 ? "s" : ""}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
          />
        </Box>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{values[0].description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default NewsPost;
