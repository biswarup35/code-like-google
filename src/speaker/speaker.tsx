import * as React from "react";
import Link from "next/link";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardHeader,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CardImage from "../earbud/cardImage";
import SpeakerSpecs from "./speakerSpecs";

export interface SpeakerProps {
  title: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  pros: {
    id: string | number;
    pro: string;
  }[];
  cons: {
    id: string | number;
    con: string;
  }[];
  specs: {
    power: string | number;
    playBackTime: string | number;
    sound: string;
    bluetoothVersion: string | number;
    configuration: string;
  };
  affliateLinks: {
    amazon?: string;
    flipkart?: string;
  };
}

/**
 * Product Card
 * @param {SpeakerProps} title
 * @return {JSX.Element}
 */
const Speaker: React.FunctionComponent<SpeakerProps> = ({
  title,
  image,
  specs,
  pros,
  cons,
  affliateLinks,
}: SpeakerProps): JSX.Element => {
  return (
    <Card>
      <CardHeader title={title} />
      <CardImage
        src={image.src}
        alt={image.alt}
        height={image.height}
        width={image.width}
      />
      <CardContent>
        {/* Specifications */}
        <SpeakerSpecs specs={specs} />
        <Divider sx={{ marginBottom: 2 }} />
        <CardActions sx={{ justifyContent: "space-around", gap: 1 }}>
          {affliateLinks.amazon && (
            <Link href={affliateLinks.amazon} passHref>
              <Button variant="contained" size="small" fullWidth>
                Amazon
              </Button>
            </Link>
          )}
          {affliateLinks.flipkart && (
            <Link href={affliateLinks.flipkart} passHref>
              <Button variant="contained" size="small" fullWidth>
                Flipkart
              </Button>
            </Link>
          )}
        </CardActions>
        <Divider sx={{ marginTop: 2 }} />
        <List dense>
          {pros.slice(0, 3).map((pro) => (
            <ListItem key={pro.id}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary={pro.pro} />
            </ListItem>
          ))}
        </List>
        <List dense>
          {cons.slice(0, 3).map((con) => (
            <ListItem key={con.id}>
              <ListItemIcon>
                <CancelIcon sx={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText primary={con.con} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Speaker;
