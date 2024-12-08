import storeMap from "./storeMap";
import { toJS } from "mobx"

export const toString = (map: any) => { 
    const result = {};
    Object.keys(map).forEach(e => { 
        result[e] = toJS(map[e])
    })
    return JSON.stringify(result)
}

export const toStore = (originMap) => {
  const map = {};
  Object.keys(originMap).forEach((key) => {
      const targetStore = storeMap[key];
      const value = originMap[key];
      map[key] = targetStore.createClass(value);
  });
  return map;
};