import {
  AutoSizer,
  Collection,
  type CollectionCellRenderer,
  type CollectionCellSizeAndPositionGetter,
} from "react-virtualized";

import styles from "./ReactVirtualizedCollectionDemoPage.module.scss";

function loop() {
  const list = [{ name: "Brian Vaughn0", x: 0, y: 0, width: 123, height: 234 }];
  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      list.push({
        name: `"Brian Vaughn${i}-${j}"`,
        x: i * 100,
        y: j * 100,
        width: 123,
        height: 234,
      });
    }
  }
  return list;
}

const list = loop();

const cellRenderer: CollectionCellRenderer = ({ index, key, style }) => {
  return (
    <div key={key} style={style}>
      {list[index].name}
    </div>
  );
};

const cellSizeAndPositionGetter: CollectionCellSizeAndPositionGetter = ({
  index,
}) => {
  const datum = list[index];

  return {
    height: datum.height,
    width: datum.width,
    x: datum.x,
    y: datum.y,
  };
};
export default function ReactVirtualizedCollectionDemoPage() {
  return (
    <div className={styles.page}>
      <p>
        这个表格在 vite 下使用 react 会影响到其他组件，官方只提供了 webpack 的
        react 插件。
      </p>
      <p>
        所以还是不要用这个组件，用 handsontable ，或者使用 webpack 的项目，而不要在 vite 项目使用。
      </p>
      <div className={styles["vc-box"]}>
        <AutoSizer>
          {({ height, width }) => (
            <Collection
              cellCount={list.length}
              cellRenderer={cellRenderer}
              cellSizeAndPositionGetter={cellSizeAndPositionGetter}
              height={height}
              width={width}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
}
