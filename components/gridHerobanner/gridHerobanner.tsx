import styles from "./gridHerobanner.module.scss";
import Image, { StaticImageData } from "next/image";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Expert = {
  name: string;
  title: string;
  image: string | StaticImageData;
};

type GridHerobannerProps = {
  experts: Expert[];
};

export default function GridHerobanner({ experts }: GridHerobannerProps) {
  return (
    <section className={styles.gridHerobanner}>
      <Grid container spacing={4} justifyContent="center">
        {experts.map((expert) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={expert.name}>
            <Card elevation={2}>
              <Card elevation={3} className={styles.card}>
                <Box className={styles.box}>
                  <Image
                    src={
                      typeof expert.image === "string"
                        ? expert.image
                        : expert.image.src
                    }
                    alt={expert.name}
                    fill
                    className={styles.image}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" align="center">
                    {expert.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {expert.title}
                  </Typography>
                </CardContent>
              </Card>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
