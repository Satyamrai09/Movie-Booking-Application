import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import { userSelection } from "./filters";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function GenreSelect(props) {
  const [genreName, setgenreName] = React.useState([]);

  const handleChange = (event) => {
    if (!userSelection.genres.includes(event.target.value)) {
      userSelection.genres = event.target.value;
    }
    setgenreName(event.target.value);
  };

  return (
    <>
      <InputLabel id="demo-mutiple-checkbox-label">Genres</InputLabel>
      <Select
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        multiple
        value={genreName}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {props.genres.map((name) => (
          <MenuItem key={name.id} value={name.name}>
            <Checkbox checked={genreName.indexOf(name.name) > -1} />
            <ListItemText primary={name.name} />
          </MenuItem>
        ))}
      </Select>
    </>
  );
}