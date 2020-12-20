import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    // I am adding first outside container, To this, I am giving className 
    // Home Page. And There will be another container inside this for that we will again use the div tag 
    // Inside this menu-item container, There is this Content container.
    // And Insde our content container, I want h1 tag that is our <title className=""></title> 
    // We will also write  our Subtitle in a span with text shop now
    // We will copy this for five times because we need five components 
 <div className = 'HomePage'> 
     <div className = 'Directory-Menu'> 
         <div className = 'Menu-Item'>
             <div className = 'content'>
                 <h1 className = 'title'> HATs </h1>
                 <span className = 'subTitle' > SHOW NOW </span>

             </div>
         </div>
 
 
        <div className = 'Menu-Item'>
            <div className = 'content'>
                <h1 className = 'Title'> Women </h1>
                <span className = 'SubTitle' > SHOW NOW </span>

            </div>
        </div>

        <div className = 'Menu-Item'>
            <div className = 'content'>
                <h1 className = 'Title'> Men </h1>
                <span className = 'SubTitle' > SHOW NOW </span>

            </div>
        </div>
        <div className = 'Menu-Item'>
            <div className = 'content'>
                <h1 className = 'Title'> Jackets </h1>
                <span className = 'SubTitle' > SHOW NOW </span>

            </div>
        </div>

        <div className = 'Menu-Item'>
            <div className = 'content'>
                <h1 className = 'Title'> sneakers </h1>
                <span className = 'SubTitle' > SHOW NOW </span>

            </div>
        </div>
</div>
</div>)

export default HomePage;
