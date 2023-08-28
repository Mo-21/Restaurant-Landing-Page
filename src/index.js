import './styles/main.scss';
import {loadSection} from './initial-page-load';

const content = document.getElementById('content');

if(content.innerHTML === '') {
    loadSection('home');
}
