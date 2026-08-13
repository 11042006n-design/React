import React, {useState,useEffect} from 'react';
import axios from 'axios';
import HeaderItem from './components/HeaderItem';     // Импорт HeaderItem
import ContentItem from './components/ContentItem';   // Импорт ContentItem
import FooterItem from './components/FooterItem'; 

const baseUrl="https://jsonplaceholder.typicode.com/posts"

const HomePage=()=>{
    const value = "какие-то карточки с картинками";
    const [labels,setLabels]=useState(
        [
            // {id:1,cardTitle:"Заголовок 1",cardText:"Описание 1"},
            // {id:2,cardTitle:"Заголовок 2",cardText:"Описание 2"},
            // {id:3,cardTitle:"Заголовок 3",cardText:"Описание 3"},
            // {id:4,cardTitle:"Заголовок 4",cardText:"Описание 4"},
            // {id:5,cardTitle:"Заголовок 5",cardText:"Описание 5"},
            // {id:6,cardTitle:"Заголовок 6",cardText:"Описание 6"}
        ]
    );
    
        
      

    useEffect(()=>{
        axios.get(baseUrl)
        .then(res=>{
           
            
            //forEach(
            //     // userId,
            //     // id,
            //     // title,
            //     // body
            //     item => {
            //         temp.push(
            //             // new object put in temp array
            //             {
            //                 id:item.id,
            //                 cardTitle:item.title.slice(0,20),
            //                 cardText:item.body.slice(0,50)
            //             }
            //         )
                
            // });
            setLabels(res.data.slice(0,5));
        });
    });


    return (
        <div className="container col-10">
            <HeaderItem headerText={value}/>
            <ContentItem
    
                setOfLabels={labels}
                />
            {/* <button className="btn btn-primary m-3"
            onClick={() => {
                setLabels([...labels,
                {id:1,cardTitle:"Новый заголовок 1",cardText:"Новое значение 1"}
                ])
            }}>
                Добавить элемент
            </button> */}
            <FooterItem/>
        </div> 
    );
}

export default HomePage;