import React, { useState } from 'react';
import EnemyHealthBar from '../HealthBar/EnemyHealthBar';
import ForwardPriest from "../../Assets/Models/Forward-Priest.png";
import Shooting1Priest from "../../Assets/Models/Shoot-Right-Priest.png";
import Shooting2Priest from "../../Assets/Models/Shoot-Left-Priest.png";
import HitPriest from "../../Assets/Models/Hit-Priest.png";
import DemonLeaving1 from "../../Assets/Models/Demon-Leaving-1.png";
import DemonLeaving2 from "../../Assets/Models/Demon-Leaving-2.png";
import RevivedPriest from "../../Assets/Models/Revived-Priest.png";
import DemonSpirit from "../../Assets/Models/Demon-Spirit.png";

const Enemy = () => {

const [enemyImage, setImage] = useState<string>(ForwardPriest)
const [isPriest, setIsPriest] = useState<boolean>(true)
const [isBishop, setIsBishop] = useState<boolean>(false)
const [isCardinal, setIsCardinal] = useState<boolean>(false)
const [isPope, setIsPope] = useState<boolean>(false)

//make function that checks game level and selects the enemy accordingly, make it then assign models and fire times accordingly as well

    const changeImage = () => {
        if (enemyImage !== Shooting1Priest) {
            setImage(Shooting1Priest)
        } else {
            setImage(Shooting2Priest)
        }
    }

    interface IFireTimes {
        priestFireTimes: number[]
        bishopFireTimes: number[]
        cardinalFireTimes: number[]
        popeFireTimes: number[]
    }

    const enemyFireTimes: IFireTimes = {
        priestFireTimes: [1700, 2500],
        bishopFireTimes: [1500, 2000],
        cardinalFireTimes: [1300, 1750],
        popeFireTimes: [1100, 1300]
    }


    return (
        <div className="right-side">
            <div className="health-div">
                <EnemyHealthBar />
            </div>
            <div className="enemy-image">
                <img src={enemyImage} onClick={changeImage} />
            </div>
        </div>
    );
}

export default Enemy;