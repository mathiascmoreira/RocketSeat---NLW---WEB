import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

//yarn add react-router-dom  
//yarn add @types/react-router-dom -D

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />               {/* É necessário o uso do exact para a rota coincida exatamente com o path expecificado. */}
            <Route component={CreatePoint} path="/create-point" />  {/* Se não for colocado o exact, o path="/" irá considerar todas as rotas que comecem com a / */}
        </BrowserRouter>
    )
}

export default Routes;

//Neste componente são definidas as rotas da aplicação.
//Após a definição das rotas, este arquivo é importado e utilizado no App.tsx



