import { $ } from './utils/dom.js';
import renderTemplate from './utils/renderTemplate.js';


export default function App () {
    function render () {
        renderTemplate($('#text'),`<span>hi!</span>`)
    }
    render()
};
