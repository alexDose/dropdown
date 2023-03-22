import React, {MouseEvent} from 'react';
import styles from "./Select.module.css";
import ArrowDownIcon from "../../assets/ArrowDownIcon";
import SelectedElements from "./SelectedElements";

type Props = {
    items: string[]
    open: boolean
    setOpen: (value: boolean) => void
    switchToggle: (e: MouseEvent<HTMLDivElement>) => void
    removeItem: (value: string) => void
}

const Select = ({items, open, setOpen, switchToggle, removeItem}: Props) => {
    return (
        <div>
            <div className={styles.title}>Язык</div>
            <div className={styles.dropdown} onClick={switchToggle}>
                <SelectedElements items={items} removeItem={removeItem}/>
                <div className={open ? styles.icon : `${styles.icon} ${styles.rotate}`}
                     onClick={() => setOpen(!open)}>
                    <ArrowDownIcon/>
                </div>
            </div>
        </div>
    );
};

export default Select;
