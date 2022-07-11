import React, { useState, useEffect, useRef, useMemo } from "react";
import classes from "./VirtualScroll.module.css";
import Item from "../Item/Item";

const VirtualScroll = ({ children, ...props }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const ref = useRef();
  const HEIGHT_ITEM = (props.itemHeight || 50) + 2;
  const HEIGHT_CONTAINER = props.height || 200;
  const HIDEN_ITEMS = props.bench || 2;
  const HEIGHT_ALL_ITEMS = Math.ceil(HEIGHT_ITEM * props.items.length);

  // количество видимых элементов
  // высота контейнера / высота элемента + 2 пиксела бордюра + отступ + скртые элементы

  const VISIBLE_ITEMS_COUNT =
    Math.floor(HEIGHT_CONTAINER / HEIGHT_ITEM) + HIDEN_ITEMS;

  let startNode = Math.floor(scrollTop / HEIGHT_ITEM);
  let offsetY = startNode * HEIGHT_ITEM;

  const onScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  useEffect(() => {
    const container = ref.current;
    setScrollTop(container.scrollTop);
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const visibleItems = useMemo(
    () => props.items.slice(startNode, startNode + VISIBLE_ITEMS_COUNT),
    [startNode, VISIBLE_ITEMS_COUNT, props]
  );

  return (
    <div
      className={classes.virtual_scroll}
      style={{ height: `${HEIGHT_CONTAINER}px` }}
      ref={ref}
    >
      <div style={{ height: `${HEIGHT_ALL_ITEMS}px` }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item, index) => (
            <Item name={item.name} id={item.id} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default VirtualScroll;
