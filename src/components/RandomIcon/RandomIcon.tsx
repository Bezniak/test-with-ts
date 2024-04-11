import React, {FC, useState} from 'react';
import styles from './RandomIcon.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faCoffee, faFaceSmileWink, faHandshake, faHeart, faLaptop, faStar} from '@fortawesome/free-solid-svg-icons';


export const RandomIcon: FC = () => {

    const [randomIcon, setRandomIcon] = useState<IconProp | null>(null);

    const icons: IconProp[] = [faCoffee, faStar, faHeart, faLaptop, faHandshake, faFaceSmileWink];

    const handleIconsClick = () => {
        const randomIndex = Math.floor(Math.random() * icons.length);
        setTimeout(() => {
            setRandomIcon(icons[randomIndex]);
        }, 3000);
    };

    console.log(randomIcon)

    return (
        <div className={styles.container}>
            {randomIcon && <FontAwesomeIcon icon={randomIcon}/>}
            <button onClick={handleIconsClick}>
                Показать случайную иконку
            </button>
        </div>
    );
};