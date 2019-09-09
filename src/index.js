import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Cards'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')
ReactDOM.render(<Card 
                    title="Guia Tecnica"
                    description="aprende ejercicios"
                    img="url('../../images/circles.png')"
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                />, container)