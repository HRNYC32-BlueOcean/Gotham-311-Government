import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/employee-dashboard-styles.scss';
import './styles/styles.scss';
import './styles/issue-styles.scss';

const mountNode = document.getElementById('app');
ReactDOM.render(<App/>, mountNode);
