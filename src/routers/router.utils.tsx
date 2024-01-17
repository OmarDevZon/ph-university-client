import { NavLink } from "react-router-dom";
import { TIteams, TPaths, TRouts } from "./router.interface";

export const routGenerator = (items: TIteams[]) => {
  const routers = items.reduce((acc: TRouts[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child?.path as string,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  return routers;
};

export const sidebarItemGenerator = (items : TIteams[]) => {
  const sidebar = items.reduce((acc: TPaths[], item) => {
    if (item.path && item.element) {
      acc.push({
        key: item.name,
        label: <NavLink to={`${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return sidebar;
};
