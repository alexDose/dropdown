import React from 'react';
import styles from './SelectedElements.module.css'
import CrossIcon from "../../assets/CrossIcon";

type Props = {
    items: string[]
    removeItem: (item: string) => void
}

const SelectedElements = ({items, removeItem}: Props) => {
    return (
        <div className={styles.selectedElements}>
            {items.length
                ? items.map(item => <div className={styles.selectedElement} key={item}>
                    {item}
                    <div onClick={() => removeItem(item)}>
                        <CrossIcon/>
                    </div>
                </div>)
                : <span>Выберите язык</span>
            }
        </div>
    );
};

export default SelectedElements;
