import React from 'react';

import './index.css';

export default function NavBar() {
    return (
        <div style={{}}>
            <div
                style={{
                    marginTop: '25px',
                    display: 'flex',
                    marginLeft: '40px',
                }}
            >
                <input
                    type="text"
                    placeholder="Pesquise por um veículo"
                    style={{
                        backgroundColor: '#1A2433',
                        color: '#ddd',
                        border: '1.5px solid #AAA',
                        borderRadius: '3px',
                        width: '75%',
                        height: '38px',
                        fontSize: '16px',
                        fontWeight: 600,
                        paddingLeft: '10px',
                        fontFamily: 'Roboto',
                    }}
                />
                <button
                    type="button"
                    style={{
                        border: 0,
                        borderRadius: '3px',
                        height: '40px',
                        fontSize: '16px',
                        fontWeight: 500,
                        marginLeft: '15px',
                        width: '120px',
                        
                        marginRight: '20px',
                    }}
                >
                    Cadastrar
                </button>
            </div>
        </div>
    );
}
