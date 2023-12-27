import React, {ChangeEvent, useState} from 'react';
import styles from './App.module.css';
import {Settings} from "./components/Settings/Settings";
import {Counter} from "./components/Counter/Counter";

export const App = () => {

    // Settings

    const [settingsButtonIsDisable, setSettingsButtonIsDisable] = useState(true);
    const [settingsMaxValue, setSettingsMaxValue] = useState(2);
    const [settingsMinValue, setSettingsMinValue] = useState(0);

    const onChangeSettingsMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        let currentTargetMaxValue = Number(event.currentTarget.value);
        setSettingsMaxValue(currentTargetMaxValue);
        if (currentTargetMaxValue <= 0 || currentTargetMaxValue <= settingsMinValue || settingsMinValue < 0) {
            setSettingsButtonIsDisable(true)
        } else {
            setSettingsButtonIsDisable(false)
        }
    };
    const onChangeSettingsMinValue = (event: ChangeEvent<HTMLInputElement>) => {
        let currentTargetMinValue = Number(event.currentTarget.value);
        setSettingsMinValue(currentTargetMinValue);
        if (currentTargetMinValue < 0 || currentTargetMinValue >= settingsMaxValue || settingsMaxValue < 0) {
            setSettingsButtonIsDisable(true)
        } else {
            setSettingsButtonIsDisable(false)
        }
    };

    // Counter

    const [maxValueForCounter, setMaxValueForCounter] = useState(settingsMaxValue);
    const [minValueForCounter, setMinValueForCounter] = useState(settingsMinValue);
    const [currentSumCounter, setCurrentSumCounter] = useState(settingsMinValue);

    // Counter & Settings

    const valuesIsNotCorrect = () => {
        return settingsMinValue < 0 || settingsMaxValue < 0 || settingsMinValue >= settingsMaxValue
    };
    const newSettingsForCounter = () => {
        setCurrentSumCounter(settingsMinValue)
        setMaxValueForCounter(settingsMaxValue)
        setMinValueForCounter(settingsMinValue)
        setSettingsButtonIsDisable(true)
    };

    return (
        <div className={styles.mainWrapper}>
            <Settings settingsButtonIsDisable={settingsButtonIsDisable}
                      settingsMaxValue={settingsMaxValue}
                      settingsMinValue={settingsMinValue}
                      onChangeSettingsMaxValue={onChangeSettingsMaxValue}
                      onChangeSettingsMinValue={onChangeSettingsMinValue}
                      newSettingsForCounter={newSettingsForCounter}
                      valuesIsNotCorrect={valuesIsNotCorrect()}/>
            <Counter currentSumCounter={currentSumCounter}
                     setCurrentSumCounter={setCurrentSumCounter}
                     maxValueForCounter={maxValueForCounter}
                     minValueForCounter={minValueForCounter}
                     valuesIsNotCorrect={valuesIsNotCorrect()}
            />
        </div>
    );
};