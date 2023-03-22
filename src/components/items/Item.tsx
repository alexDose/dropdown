import React, {ChangeEvent} from 'react';
import styles from './Item.module.css'
import CheckboxIcon from "../../assets/CheckboxIcon";
import {ItemType} from "../../types/types";

type Props = {
    item: ItemType
    addItem: (value: string) => void
    isIcon: boolean
    isMultiSelect: boolean
    onChangeHandler: (id: number, e: ChangeEvent<HTMLInputElement>, title: string) => void
}

const Item = ({onChangeHandler, isMultiSelect, isIcon, addItem, item}: Props) => {
    return (
        <div key={item.id} className={styles.item}>
            <div className={styles.title} onClick={() => addItem(item.title)}>
                {isIcon && item.icon}
                <div>
                    {item.title}
                </div>
            </div>
            {isMultiSelect
                ? <label>
                    <input className={styles.checkbox}
                           checked={item.isDone}
                           onChange={(e) => onChangeHandler(item.id, e, item.title)}
                           type="checkbox"/>
                    <div className={styles.check}>
                        <CheckboxIcon/>
                    </div>
                </label>
                : <div className={styles.plug}></div>}
        </div>
    );
};

export default Item;
