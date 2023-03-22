import React from 'react';
import styles from "./ButtonsBlock.module.css";

type Props = {
    setIsIcon: (value: boolean) => void
    setMultiSelect: () => void
    isIcon: boolean
    isMultiSelect: boolean
}

const ButtonsBlock = ({isMultiSelect, isIcon, setMultiSelect, setIsIcon}: Props) => {
    return (
        <div className={styles.btnBlock}>
            <button onClick={() => setIsIcon(!isIcon)}>
                {isIcon
                    ? 'Не отображать иконку'
                    : 'Отображать иконку'}
            </button>
            <button onClick={setMultiSelect}>
                {isMultiSelect
                    ? 'Выключить мультиселект'
                    : 'Включить мультиселект'}
            </button>
        </div>

    );
};

export default ButtonsBlock;
