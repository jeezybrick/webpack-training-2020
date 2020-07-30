import Post from '@models/Post';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';
import json from './assets/json';
import WebpackLogo from '@/assets/webpack';
import xml from './assets/data.xml';
import csv from './assets/data.csv';
import * as $ from 'jquery';
import './babel';


const post = new Post('Webpack post title', WebpackLogo);
$('pre').addClass('test').html(post.toString());

console.log(json);
console.log(xml);
console.log(csv);
