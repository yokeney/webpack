//main.js
import React from 'react';
import {render} from 'react-dom';
import Greet from './Greet';
import './main.css';//使用require导入css文件

render(<Greet />, document.getElementById('root'));
