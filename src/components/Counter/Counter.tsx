import React from 'react';
import {Button} from "../Button/Button";
import styles from './Counter.module.css';

type CounterPropsType = {
    currentSumCounter: number
    setCurrentSumCounter: (currentSum: number) => void
    minValueForCounter: number
    maxValueForCounter: number
    valuesIsNotCorrect: boolean
}

export const Counter = ({
                            currentSumCounter,
                            setCurrentSumCounter,
                            minValueForCounter,
                            maxValueForCounter,
                            valuesIsNotCorrect
                        }: CounterPropsType) => {

    const doPlus = () => setCurrentSumCounter(currentSumCounter += 1);
    const doReset = () => setCurrentSumCounter(minValueForCounter);

    const currentSumIsNotCorrect = currentSumCounter < 0 || currentSumCounter >= maxValueForCounter;
    const currentSumEqualMinValue = currentSumCounter === minValueForCounter;

    return (
        <div>
            <div className={styles.counterMain}>
                <div className={styles.counterSum}>
                    {
                        valuesIsNotCorrect
                            ? <span className={styles.valuesIsNotCorrect}>
                                Ошибка! Пожалуйста, введите корректное значение!
                            </span>
                            : <span className={currentSumIsNotCorrect ? styles.counterSumStop : ''}>
                                {currentSumCounter}
                            </span>
                    }
                </div>
                <div className={styles.buttonWrapper}>
                    <Button title={'+'}
                            onClick={doPlus}
                            isDisable={valuesIsNotCorrect || currentSumIsNotCorrect}/>
                    <Button title={'Сбросить'}
                            onClick={doReset}
                            isDisable={currentSumEqualMinValue}/>
                </div>
            </div>
        </div>
    );
};