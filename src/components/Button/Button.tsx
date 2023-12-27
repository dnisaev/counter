import React from "react";
import styles from './Button.module.css';

type ButtonPropsType = {
    title: string
    isDisable: boolean
    onClick: () => void
};

export const Button = ({title, isDisable, onClick}: ButtonPropsType) => {
    return (
        <button className={isDisable ? styles.buttonStop : styles.button}
                onClick={isDisable ? undefined : onClick}>
            <span>
                {title}
            </span>
        </button>
    );
};