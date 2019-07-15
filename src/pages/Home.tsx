import  React, { useState } from "react";
// import HomeTop from './HomeComponent/HomeTop'
// import HomeTitle from './HomeComponent/HomeTitle'
import styles from  './Home.module.scss';
interface IProps {
    name : string | string[]
}

const Home: React.FC = ()=>{
    const [name, setName ] = useState('sauron');

    const clickFun = ()=>{
        setName('xingyao')
        console.log(name)
    }

    return (
        <div className='Home'>
            <div className={styles.hello} onClick={ clickFun }>{ name }</div>
        </div>
    )
} 

export default Home;