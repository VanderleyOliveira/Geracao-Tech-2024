import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { id } = useParams();
    return (
        <div>
            <h1>Usuário {id}</h1>
            {/* Exibir informações do usuário com base no ID */}
        </div>
    );
}

export default User;