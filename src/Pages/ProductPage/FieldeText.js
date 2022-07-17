import React, { useContext } from "react";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import useForm from "../../hooks/useForm";
import { GlobalStateContext } from "../../Global/GlobalStateContext";


export const FieldText = () => {
  const { form, onChange, cleanFields } = useForm({
    search: '',
  })
  const { states, setters } = useContext(GlobalStateContext)
  const { searchS } = states
  const { setSearch } = setters
  setSearch(form.search)

  return (
    <Paper component="form" >
      <IconButton aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        name={"search"}
        value={form.search}
        onChange={onChange}
        className
        placeholder="pesquisa"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        className
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider className orientation="vertical" />

    </Paper>
  );
};
