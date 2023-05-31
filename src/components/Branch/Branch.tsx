import BranchButtons from "../BranchButtons";

import TreeContext from "@/lib/context/treeContext";
import { useContext, useEffect, useRef, useState } from "react";
import { TreeBranch, TreeBranchDefault } from "@/types";

import styles from "./Branch.module.scss";

type Props = {
  branch: TreeBranch;
};

function Branch({ branch }: Props) {
  const { editBranch } = useContext(TreeContext);
  const [value, setValue] = useState(branch.value);
  const [isEdit, setIsEdit] = useState(true);

  const newBranchField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // focus the element with `ref={newBranchField}`
    if (newBranchField.current) {
      newBranchField.current.focus();
    }
  }, []);

  const children = () => {
    if (branch.children?.length) {
      return (
        <ul className={styles["branch__children"]}>
          {branch.children.map((child) => {
            return <Branch branch={child} key={child.id} />;
          })}
        </ul>
      );
    }

    return null;
  };

  const branchContent = () => {
    if (isEdit) {
      return (
        <input
          type="test"
          className={styles["branch__content-input"]}
          value={value}
          ref={newBranchField}
          onBlur={onSaveHandler}
          onKeyDown={onKeyDownHandler}
          readOnly={!isEdit}
          onChange={(evt) => setValue(evt.target.value)}
        />
      );
    }

    return <span className={styles["branch__content-value"]}>{value}</span>;
  };

  function onKeyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      onSaveHandler();
    }

    if (value === branch.value && event.key !== "Enter") {
      setValue('');
    }
  }

  function onSaveHandler() {
    setIsEdit(false);
    editBranch(branch, value);
  }

  function onUnsaveHandler() {
    setValue(TreeBranchDefault.value);
    setIsEdit(false);
  }

  function onEditHandler() {
    setIsEdit(true);
  }

  useEffect(() => {
    if (branch.main) {
      editBranch(branch, value);
    }
  }, [value]);

  return (
    <li
      className={`${styles["branch"]} ${branch.main && styles["branch--main"]}`}
    >
      <div
        className={`${styles["branch__content"]} ${
          isEdit && styles["branch__content--edit"]
        }`}
      >
        {branchContent()}
        <BranchButtons
          isEdit={isEdit}
          branch={branch}
          onSave={onSaveHandler}
          onUnsave={onUnsaveHandler}
          onEdit={onEditHandler}
        />
      </div>
      {children()}
    </li>
  );
}

export default Branch;
