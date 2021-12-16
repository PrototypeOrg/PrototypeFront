import React from 'react'

import Menu2 from 'components/menu.component2';

import Menu1 from 'components/menu.component';

import Home from 'home/views/home.view';

export const Inicio = () => {
    return (
        <div>
            <Menu1 />
            <Home />
        </div>
    )
}


export default Inicio;
