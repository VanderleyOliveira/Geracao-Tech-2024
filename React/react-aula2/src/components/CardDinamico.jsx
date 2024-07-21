import React from 'react';

const CardDinamico = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid green', padding: '20px', margin: '20px 10px'}}>
            {children}
        </div>
    );
};

export default CardDinamico;