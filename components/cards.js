import { Grid } from "@mui/material";
import Card1 from "./card";

function CardGrid(props) {
  if (!props.cardData || props.cardData.length === 0) {
    return null;
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {props.cardData.map((card) => (
        <Grid item={true} xs={12} sm={6} md={4} key={card.id}>
          <Card1
            id={card.id}
            title={card.title}
            name={card.name}
            description={card.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardGrid;
