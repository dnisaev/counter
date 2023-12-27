import {Button} from "../Button/Button";
import {ChangeEvent} from "react";
import styles from './Settings.module.css';

type SettingsPropsType = {
    settingsButtonIsDisable: boolean
    settingsMaxValue: number
    settingsMinValue: number
    onChangeSettingsMaxValue: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeSettingsMinValue: (event: ChangeEvent<HTMLInputElement>) => void
    newSettingsForCounter: () => void
    valuesIsNotCorrect: boolean
};

export const Settings = ({
                             settingsButtonIsDisable,
                             settingsMaxValue,
                             settingsMinValue,
                             onChangeSettingsMaxValue,
                             onChangeSettingsMinValue,
                             newSettingsForCounter,
                             valuesIsNotCorrect
                         }: SettingsPropsType) => {
    return (
        <div>
            <div className={styles.settingsMain}>
                <div className={styles.settingsValues}>
                    <div className={styles.settingsMaxValue}>
                        <span>Максимум:</span>
                        <input className={valuesIsNotCorrect ? styles.inputValuesIsNotCorrect : ''}
                               value={settingsMaxValue}
                               type={'number'}
                               onChange={onChangeSettingsMaxValue}/>
                    </div>
                    <div className={styles.settingsMinValue}>
                        <span>Минимум:</span>
                        <input className={valuesIsNotCorrect ? styles.inputValuesIsNotCorrect : ''}
                               value={settingsMinValue}
                               type={'number'}
                               onChange={onChangeSettingsMinValue}/>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <Button title={'Задать'} isDisable={settingsButtonIsDisable} onClick={newSettingsForCounter}/>
                </div>
            </div>
        </div>
    );
};