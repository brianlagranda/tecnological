import { createContext } from "react";

export const context = createContext();

export function userContext(props) {
  return (
    <>
      {props.childen}
    </>
  )
}