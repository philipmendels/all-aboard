import { cssRule } from "typestyle";
import { normalize } from "csstips";

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