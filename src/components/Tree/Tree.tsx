import treeContext from "@/lib/context/treeContext";
import { forwardRef, useContext } from "react";
import Branch from "../Branch/Branch";

import styles from './Tree.module.scss';

type Props = {
  onMouseDown: () => void;
}

const Tree = forwardRef<HTMLUListElement, Props>(({ onMouseDown }, ref) => {
  const { tree } = useContext(treeContext);

  return(
    <ul
      className={styles['tree']}
      onMouseDown={onMouseDown}
      ref={ref}
    >
      <Branch branch={tree} />
    </ul>
  );
})

export default Tree;