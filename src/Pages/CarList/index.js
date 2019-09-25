import React from 'react';

import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';

import './index.css';

export default function CarList() {
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
                <NavBar/>
                <div id='row'>
                <table style={{
                    marginTop: '100px',
                    marginLeft: '50px',
                    width: '60vw',
                    borderSpacing: '30px',
                    borderBottom: '1px solid rgba(255,255,255,0.2)',
                }}>
                    <tr>
                        <td>   
                            <p style={{
                                fontSize: '18px',
                                fontWeight: 'bold'
                            }}>Celta Azul 2005 Ar e Direção</p>
                            <p size="10"><strong>Celta * Chevrolet * 106.041 KM</strong></p>
                        </td>
                        <td style={{
                            textAlign: 'right'
                        }}>
                            <p style={{
                                fontSize: '18px',
                                fontWeight: 'bold'
                            }}>R$ 11.772,22</p>
                            <p><strong>2005</strong></p>
                        </td>
                    </tr>
                </table>
                </div>
            </div>            
        </div>
    );
}
