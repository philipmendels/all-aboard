import { cssRule } from "typestyle";
import { normalize } from "csstips";
import { Colors } from "./styles/styles";

normalize();

cssRule('html, body', {
  height: '100%',
  width: '100%',
  padding: 0,
  margin: 0,
  userSelect: 'none',
  "-moz-user-select": 'none',
  fontFamily: 'Lato, sans-serif',
});

cssRule(':focus', {
  outline: `2px ${Colors.HIGHLIGHT}`
});