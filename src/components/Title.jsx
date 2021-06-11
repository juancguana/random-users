import React from 'react';
import './styles/Title.css'

const Title = ({ text = "Mi titulo" }) => <h1 className="title">{text}</h1>


export default Title;