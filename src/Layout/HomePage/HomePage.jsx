import React from 'react';
import HeaderItem from './components/HeaderItem';     // Импорт HeaderItem
import ContentItem from './components/ContentItem';   // Импорт ContentItem
import FooterItem from './components/FooterItem'; 

const HomePage=()=>{
    const value = "какие-то карточки с картинками";
    const labels=[
        {id:1,cardTitle:"Заголовок 1",cardText:"Описание 1"},
        {id:2,cardTitle:"Заголовок 2",cardText:"Описание 2"},
        {id:3,cardTitle:"Заголовок 3",cardText:"Описание 3"},
        {id:4,cardTitle:"Заголовок 4",cardText:"Описание 4"},
        {id:5,cardTitle:"Заголовок 5",cardText:"Описание 5"},
        {id:6,cardTitle:"Заголовок 6",cardText:"Описание 6"}
    ];  
    return (
        <div className="container col-10">
            <HeaderItem headerText={value}/>
            <ContentItem
    
                setOfLabels={labels}
                />
            <FooterItem/>
        </div> 
    );
}

export default HomePage;