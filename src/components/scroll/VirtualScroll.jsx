import React, { useState, useEffect, useRef } from "react";
import classes from "./VirtualScroll.module.css";

const VirtualScroll = ({ children, ...props }) => {
  const PADDING = 0;
  const HEIGHT_ITEM = 50 + 2 + PADDING;
  const HEIGHT_CONTAINER = 500;
  const HIDEN_ITEMS = 4;
  const HEIGHT_ALL_ITEMS = Math.ceilHEIGHT_ITEM * props.items.length;

  // количество видимых элементов
  // высота контейнера / высота элемента + 2 пиксела бордюра + отступ + скртые элементы

  const VISIBLE_ITEMS_COUNT =
    Math.floor(HEIGHT_CONTAINER / HEIGHT_ITEM) + HIDEN_ITEMS;
  const ref = useRef();
  let scrollTop = 0;

  let startNode = Math.floor(scrollTop / HEIGHT_ITEM);

  
  let offsetY = startNode * HEIGHT_ITEM;
  let visibleItems = [];
  const eventScroll = (e) => {
    scrollTop = e.target.scrollTop;
    offsetY = startNode * HEIGHT_ITEM;


    console.log("offsetY", offsetY);

    startNode = Math.floor(scrollTop / HEIGHT_ITEM);
    startNode = Math.max(0, startNode);

    console.log("startNode>", startNode);


    visibleItems = props.items.slice(
      startNode,
      startNode + VISIBLE_ITEMS_COUNT
    );
    console.log("visibleItems", visibleItems);
  };

  //
  // const [scrollTop, setScrollTop] = useState(0);
  //  высота элемента + окантовка + отступ * кол-во элеметов

  console.log("heightAllItems", HEIGHT_ALL_ITEMS);
  console.log(VISIBLE_ITEMS_COUNT);
  return (
    <div
      className={classes.virtual_scroll}
      style={{ HEIGHT_CONTAINER }}
      onScroll={eventScroll}
      ref={ref}
    >
      <div
        style={{
          willChange: "transform",
          transform: `translateY(${offsetY}px)`,
        }}
      >
        {props.items.map((item, index) => (
          <div className={classes.virtual_item} key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default VirtualScroll;
