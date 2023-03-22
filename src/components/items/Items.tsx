import React, {ChangeEvent, useState} from 'react';
import styles from "./Items.module.css";
import SearchInput from "../searchInput/SearchInput";
import {ItemType} from "../../types/types";
import Item from "./Item";

type Props = {
    items: ItemType[]
    onChangeHandler: (id: number, e: ChangeEvent<HTMLInputElement>, title: string) => void
    addItem: (value: string) => void
    isIcon: boolean
    isMultiSelect: boolean
}

const Items = ({onChangeHandler, items, addItem, isIcon, isMultiSelect}: Props) => {
    const [searchValue, setSearchValue] = useState('')

    const getFilteredItems = (items: ItemType[]) => {
        return items.filter(item => item.title.toUpperCase().indexOf(searchValue.toUpperCase()) > -1)
    }

    return (
        <div className={styles.items}>
            <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>
            {getFilteredItems(items).length
                ? getFilteredItems(items).map(item => {
                    return <Item key={item.id}
                                 item={item}
                                 addItem={addItem}
                                 isMultiSelect={isMultiSelect}
                                 isIcon={isIcon}
                                 onChangeHandler={onChangeHandler}/>
                })
                : <span>Not found</span>
            }
        </div>
    );
};

export default Items;
