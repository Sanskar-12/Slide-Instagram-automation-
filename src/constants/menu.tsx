import { ReactNode } from "react";
import { v4 as uuid } from "uuid";
import {
  AutomationDuoToneWhite,
  HomeDuoToneWhite,
  RocketDuoToneWhite,
  SettingsDuoToneWhite,
} from "@/icons";

type FieldProps = {
  label: string;
  id: string;
};

type SidebarMenuProps = {
  icon: ReactNode;
} & FieldProps;

const SIDEBAR_MENU: SidebarMenuProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <HomeDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "automations",
    icon: <AutomationDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "integrations",
    icon: <RocketDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "settings",
    icon: <SettingsDuoToneWhite />,
  },
];

export default SIDEBAR_MENU;
