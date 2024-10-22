import { ReactNode } from "react";
import MainIconSet from "./icons/MainIcon";
import NavigationIconSet from "./icons/NavigationIcon";
import ProfileIconSet from "./icons/ProfileIcon";

export interface IconPropsType {
  [key: string]: {
    icon: (color?: string) => ReactNode;
  };
}

const Icon = {
  MainIconSet,
  ProfileIconSet,
  NavigationIconSet,
};

export default Icon;
