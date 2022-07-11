import React, { useState, useEffect, useRef } from "react";
import classes from "./VirtualScroll.module.css";
const VirtualScroll = ({ children, ...props }) => {
  const eventScroll = (e) => {
    console.log(">>", e.target.scrollTop);
    console.log(">>", visibleItemsCount);
  };

  //
  const [scrollTop, setScrollTop] = useState(0);

  const heghtItem = 50;
  const heightContainer = 500;
  const padding = 10;
  const ref = useRef();
  const HIDEN_BENCH = 2;

  let startNode = Math.floor(scrollTop / heghtItem) - 2;
  const offsetY = startNode * heghtItem;

  //  высота элемента + окантовка + отступ * кол-во элеметов
  const heightAllItems =
    Math.ceil(heghtItem + 2 + padding) * props.items.length;

  console.log("heightAllItems", heightAllItems);

  // количество видимых элементов
  // высота контейнера / высота элемента + 2 пиксела бордюра + отступ

  const visibleItemsCount = Math.floor(
    heightContainer / (heghtItem + 2 + padding) + HIDEN_BENCH
  );

  console.log(visibleItemsCount);
  return (
    <div
      className={classes.virtual_scroll}
      style={{ heightContainer }}
      onScroll={eventScroll}
      ref={ref}
    >
      {props.items.map((item, index) => (
        <div className={classes.virtual_item} key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
};
export default VirtualScroll;
