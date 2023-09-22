import React from 'react';
import guyImage from '../img/guy.png';
import { Link } from 'react-router-dom';
export function Hero  (){
    return <section className='hero'>
        
    <div className='herodiv'>
        {/* text */}
        <div className="trenddiv">
            {/* pretitle */}
            <div className='newtrenddiv'>
                <div className='newtdiv'></div>New Trend
            </div>
            {/* title */}
            <h1 className='falldiv'>
                FALL SEASON SALE<br/>
                <span className='mensdiv'>MENS</span>
            </h1>
            <Link to={'/'} className='discoverdiv'>
                Discover More
            </Link>
        </div>
         {/* image  */}
         <div className='imgdiv'>
            <img src={guyImage} alt="" />
        </div>
    </div>
    </section>;
};

