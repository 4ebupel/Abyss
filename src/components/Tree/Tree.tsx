import treeContext from "@/lib/context/treeContext";
import { forwardRef, useContext } from "react";
import Node from "../Node/Node";

import styles from './Tree.module.scss';

type Props = {
  onMouseDown: () => void;
}

const Tree = forwardRef<HTMLUListElement, Props>((props, ref) => {
  const { tree } = useContext(treeContext);

  function onMouseDownHandler() {
    props.onMouseDown()
  }

  return(
    <ul
      className={styles['tree']}
      onMouseDown={onMouseDownHandler}
      ref={ref}
    >
      <Node node={tree} />
    </ul>
  );
})

export default Tree;