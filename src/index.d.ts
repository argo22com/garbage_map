// Fix typescript error for plugin vite-plugin-svgr
// source: https://github.com/pd4d10/vite-plugin-svgr/issues/3#issuecomment-787016954
declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  // const src: string;
  // export default src;
}
