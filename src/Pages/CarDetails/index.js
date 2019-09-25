import React from 'react';

import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';

export default function CarDetails() {
    return (
        <div style={{
            display: 'flex'
        }}>
            <SideBar />
            <div style={{
                width: '100%',
                height: '100px',
                backgroundColor: '#1A2433',
            }}>
                <NavBar />

                <form>
                    <input type="text"/>
                    <div>
                        <input type="text"/>
                        <input type="text"/>
                    </div>
                    <select>
                        <option>VW</option>
                    </select>
                    <div>
                        <input type="text"/>
                        <input type="text"/>
                    </div>
                    <div>
                        <input type="text"/>
                    </div>
                    <button>Remover</button>
                    <button>Cancelar</button>
                    <button>Salvar</button>
                </form>
            </div>
        </div>
    );
}
