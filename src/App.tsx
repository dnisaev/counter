import React, {ChangeEvent, useEffect, useState} from 'react';
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

    // LocalStorage

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('settingsMaxValue');
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setSettingsMaxValue(newMaxValue)
        }

        let minValueAsString = localStorage.getItem('settingsMinValue');
        if (minValueAsString) {
            let newMinValue = JSON.parse(minValueAsString)
            setSettingsMinValue(newMinValue)
        }

        let currentValueAsString = localStorage.getItem('currentSumCounter');
        if (currentValueAsString) {
            let newCurrentValue = JSON.parse(currentValueAsString)
            setCurrentSumCounter(newCurrentValue)
        }

        let maxValueForCounterAsString = localStorage.getItem('maxValueForCounter');
        if (maxValueForCounterAsString) {
            let newMaxValueForCounter = JSON.parse(maxValueForCounterAsString)
            setMaxValueForCounter(newMaxValueForCounter)
        }

        let minValueForCounterAsString = localStorage.getItem('minValueForCounter');
        if (minValueForCounterAsString) {
            let newMinValueForCounter = JSON.parse(minValueForCounterAsString)
            setMinValueForCounter(newMinValueForCounter)
        }

        let settingsButtonIsDisableAsString = localStorage.getItem('settingsButtonIsDisable');
        if (settingsButtonIsDisableAsString) {
            let newSettingsButtonIsDisable = JSON.parse(settingsButtonIsDisableAsString)
            setSettingsButtonIsDisable(newSettingsButtonIsDisable)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('settingsMaxValue', JSON.stringify(settingsMaxValue))
        localStorage.setItem('settingsMinValue', JSON.stringify(settingsMinValue))
        localStorage.setItem('currentSumCounter', JSON.stringify(currentSumCounter))
        localStorage.setItem('maxValueForCounter', JSON.stringify(maxValueForCounter))
        localStorage.setItem('minValueForCounter', JSON.stringify(minValueForCounter))
        localStorage.setItem('settingsButtonIsDisable', JSON.stringify(settingsButtonIsDisable))
    }, [
        settingsMaxValue,
        settingsMinValue,
        currentSumCounter,
        maxValueForCounter,
        minValueForCounter,
        settingsButtonIsDisable
    ]);

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