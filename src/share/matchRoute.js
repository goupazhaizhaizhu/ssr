import { matchPath } from "react-router";

export const matchRoute = (path, routeList) => {
  let targetRoute, targetMatch;

  for (var item of routeList) {
    targetMatch = matchPath(item, path);
    if (targetMatch) {
      targetRoute = item; //查找到第一个路由后停止查找
      break;
    }
  }
  return { targetRoute, targetMatch };
};
