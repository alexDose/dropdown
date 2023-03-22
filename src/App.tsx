import React, {ChangeEvent, MouseEvent, useState} from 'react';
import styles from './App.module.css'
import Select from "./components/select/Select";
import RusIcon from "./assets/RusIcon";
import EnIcon from "./assets/EnIcon";
import SpIcon from "./assets/SpIcon";
import DeIcon from "./assets/DeIcon";
import ItIcon from "./assets/ItIcon";
import PlIcon from "./assets/PlIcon";
import Items from "./components/items/Items";
import ButtonsBlock from "./components/buttonsBlock/ButtonsBlock";

function App() {
    const [isMultiSelect, setIsMultiSelect] = useState(true)
    const [isIcon, setIsIcon] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [items, setItems] = useState([
        {id: 1, icon: <RusIcon/>, title: 'Русский', isDone: false},
        {id: 2, icon: <EnIcon/>, title: 'Английский', isDone: false},
        {id: 3, icon: <SpIcon/>, title: 'Испанский', isDone: false},
        {id: 4, icon: <DeIcon/>, title: 'Немецкий', isDone: false},
        {id: 5, icon: <ItIcon/>, title: 'Итальянский', isDone: false},
        {id: 6, icon: <PlIcon/>, title: 'Польский', isDone: false}
    ]);
    const [selectedItems, setSelectedItems] = useState([] as string[])

    const onChangeHandler = (id: number, e: ChangeEvent<HTMLInputElement>, value: string) => {
        const isChecked = e.currentTarget.checked
        setItems(items.map(item =>
            item.id === id
                ? {...item, isDone: isChecked}
                : item))
        isChecked
            ? setSelectedItems([...new Set([...selectedItems, value])])
            : setSelectedItems(selectedItems.filter(item => item !== value))
    }
    const addItem = (value: string) => {
        switch (isMultiSelect) {
            case true:
                setSelectedItems([...new Set([...selectedItems, value])])
                setItems(items.map(item => item.title === value ? {...item, isDone: true} : item))
                break
            case false:
                setSelectedItems([value])
                setIsOpen(false)
        }
    }
    const removeItem = (value: string) => {
        switch (isMultiSelect) {
            case true:
                setSelectedItems(selectedItems.filter(item => item !== value))
                setItems(items.map(item => item.title === value ? {...item, isDone: false} : item))
                break
            case false:
                setSelectedItems([])
        }
    }
    const switchToggle = (e: MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget === e.target) {
            setIsOpen(!isOpen)
        }
    }
    const setMultiSelect = () => {
        setIsMultiSelect(!isMultiSelect)
        setSelectedItems([])
        setItems(items.map(item => ({...item, isDone: false})))
    }

    return (
        <div className={styles.main}>
            {isOpen && <div className={styles.backside}
                            onClick={() => {setIsOpen(false)}}
            />}
            <div className={styles.wrapper}>
                <ButtonsBlock setIsIcon={setIsIcon}
                              setMultiSelect={setMultiSelect}
                              isIcon={isIcon}
                              isMultiSelect={isMultiSelect}/>
                <Select open={isOpen}
                        setOpen={setIsOpen}
                        switchToggle={switchToggle}
                        items={selectedItems}
                        removeItem={removeItem}/>
                {isOpen && <Items isMultiSelect={isMultiSelect}
                                  isIcon={isIcon}
                                  addItem={addItem}
                                  onChangeHandler={onChangeHandler}
                                  items={items}/>}
            </div>
        </div>
    );
}

export default App;
