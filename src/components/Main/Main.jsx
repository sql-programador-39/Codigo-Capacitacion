import { useState, useEffect } from "react";

import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import './Main.css';

import data from  '../../data/data.js';

const Main = () => {

  const [info, setInfo] = useState([]);

  const getData = async () => {
    try {
      const response = data;
      setInfo(response);
    } catch (error) {
      console.log('Error', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1 className="font-bold text-3xl my-10">Todos nuestros productos</h1>
      <Modal />
      
      <section>
        <div className="grid">
            
          {info.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Main
