import TreeContext from "@/lib/context/treeContext";
import { useContext } from "react";
import { TreeBranch } from "@/types";

import { ReactComponent as PenIcon } from "@/assets/pen.svg";
import { ReactComponent as PlusIcon } from "@/assets/plus.svg";
import { ReactComponent as CrossIcon } from "@/assets/cross.svg";
import { ReactComponent as CheckIcon } from "@/assets/check.svg";
import styles from "./BranchButtons.module.scss";

type Props = {
  branch: TreeBranch;
  isEdit: boolean;
  onSave: () => void;
  onUnsave: () => void;
  onEdit: () => void;
};

export default function BranchButtons({ branch, isEdit, onSave, onEdit }: Props) {
  const { addBranch, deleteBranch } = useContext(TreeContext);

  const content = () => {
    if (branch.main) {
      return plusButton();
    }

    if (isEdit) {
      return editButtons();
    }

    return defaultButtons();
  };

  const editButtons = () => {
    return (
      <>
        <button
          className={`${styles["buttons__branch-btn"]} ${styles["buttons__branch--undo"]}`}
          onClick={() => deleteBranch(branch)}
        >
          <CrossIcon className={styles["buttons__branch-btn-icon"]} />
        </button>
        <button
          className={`${styles["buttons__branch-btn"]} ${styles["buttons__branch--confirm"]}`}
          onClick={onSave}
        >
          <CheckIcon className={styles['buttons__branch-btn-icon']} />
        </button>
      </>
    );
  };

  const plusButton = () => {
    return (
      <button
        className={styles["buttons__branch-btn"]}
        onClick={() => addBranch(branch)}
      >
        <PlusIcon className={styles["buttons__branch-btn-icon"]} />
      </button>
    );
  };

  const defaultButtons = () => {
    return (
      <>
        {plusButton()}
        <button className={styles["buttons__branch-btn"]} onClick={onEdit}>
          <PenIcon className={styles["buttons__branch-btn-icon"]} />
        </button>
        <button
          className={`${styles["buttons__branch-btn"]} ${styles["buttons_branch-btn--delete"]}`}
          onClick={() => deleteBranch(branch)}
        >
          <CrossIcon className={styles["buttons__branch-btn-icon"]} />
        </button>
      </>
    );
  };

  return <div className={styles["buttons"]}>{content()}</div>;
}
