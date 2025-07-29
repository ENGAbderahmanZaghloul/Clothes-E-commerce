import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className="!bg-transparent !shadow-none">
      <CardMedia
        sx={{ height: 340 }}
        image="/images/pic1.png"
        title="green iguana"
        className="rounded-[30px] bg-[#f0eeed] "
      />
      <CardContent className="bg-white items-start !px-0 ">
        <Typography gutterBottom variant="h5" component="div">
          T-shirt with tape details
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
