import { HTMLAttributes } from "@builder.io/qwik";

export type CSSSAtributes = HTMLAttributes<HTMLDivElement>['style'];

export interface UniqueCSS {
  parentClassName: string;
  styles: string;
}