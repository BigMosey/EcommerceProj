import React, { useContext, useEffect } from 'react';
import { SidebarContext } from '../Contexts/SidebarContext';
import { CartContext } from '../Contexts/CartContexts';
import { Link } from 'react-router-dom';
import Logo from '../img/icons8-w-64.png';

import {BsBag} from 'react-icons/bs'

export function Header() {
    //header state
    //const [isActive,setIsActive] = useState(false);
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext)
    //event listener
    //useEffect(()=> {
       // window.addEventListener('scroll', ()=>{
       //    window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
       // })
    //})
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        console.log('Toggled sidebar. IsOpen:', !isOpen);
    };

    return (
        <header className="header">
            <div className="header2">

            {/* Logo */}
            <Link to={'/'}>
                <div>
                    <img className="logo" src={Logo} alt=""/>
                </div>
            </Link>
            <div>
            <div onClick={toggleSidebar} className="cursor">
                <BsBag className='text-2xl'/>
                <div className="itemamountdiv">{itemAmount}</div>
            </div>
        </div>
        </div>

        </header>
    );
};
