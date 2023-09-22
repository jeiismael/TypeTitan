import Header from './Header.js';
import './GridLayout.css';

const GridLayout = () => {
    return ( 
        <div class="parent">
            <div class="div1">
                <Header />
            </div>
        <div class="div2"> 
            <h1>Footer</h1>
        </div>
        <div class="div3"> 
            <h1>Content</h1>
        </div>
</div>
     );
}
 
export default GridLayout;