import { makeStyles } from "@griffel/react";
import { HEIGHT1 } from "./constants_no_ts";

// TS syntax from the same module as the makeStyles call does not cause build error
const HEIGHT2: string = "102px";

export const useClasses = makeStyles({
  foo: {
    height: HEIGHT1,
  },
  bar: {
    height: HEIGHT2,
  },
});
