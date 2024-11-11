// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      background: string;
      button: string;
      header: string;
      border: string;
      text: string;
      whiteText: string;
    };
    fontSize: {
      large: string;
      medium: string;
      small: string;
    };
  }
}
