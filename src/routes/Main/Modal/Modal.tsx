import React from "react";
import style from "./Modal.module.scss";
import Portal from "../../../components/Portal/Portal";
import Button from "../../../components/Button/Button";

export default function Modal({
  title = "Modal title",
  isOpen = false,
  // onCansel,
  // onSubmit,
  children = <div>Пусто</div>,
}) {
  const onCancel = (e: any) => {
    console.log(e);
  };
  const onSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <>
      {isOpen && (
        <Portal>
          <div className={style.modalWrapper}>
            <div className={style.modal}>
              <div className={style.modalHeader}>
                <h2>{title}</h2>
                <div onClick={(e: any) => onCancel(e)}>X</div>
              </div>
              <div className={style.modalBody}>
                <h4>Modal text </h4>
                {children}
              </div>
              <div className={style.modalFooter}>
                <h3>Modal Footer</h3>
                <Button onClick={(e: any) => onCancel(e)}>Cancel</Button>
                <Button onClick={(e: any) => onSubmit(e)}>OK</Button>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
