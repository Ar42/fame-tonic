import { RoutePaths } from "@/consts/routes";

interface MenuContent {
  name: string;
  path: string;
}

export const getMenuContents = (): MenuContent[] => {
  const data: MenuContent[] = [
    {
      name: "About us",
      path: RoutePaths.ABOUT_US,
    },
    {
      name: "Contact",
      path: RoutePaths.CONTACT,
    },
  ];

  return data;
};
