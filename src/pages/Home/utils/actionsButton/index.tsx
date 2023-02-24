import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

import styles from "./styles.module.scss"

export const ActionsButtons = ({ handleOpenAndTypeModal }: any) => {
 return (
  <div className={styles.container}>
   <button type="button" onClick={() => handleOpenAndTypeModal("details", true)} className={styles.buttonGray}>
    <FaEye />
   </button>
   <button type="button" onClick={() => handleOpenAndTypeModal("edit", true)} className={styles.buttonYellow}>
    <FaEdit />
   </button>
   <button type="button" onClick={() => handleOpenAndTypeModal("delete", true)} className={styles.buttonRed}>
    <FaTrash />
   </button>
  </div >
 )
}