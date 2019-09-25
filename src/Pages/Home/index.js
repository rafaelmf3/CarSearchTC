import React from 'react';

import '../../assets/styles/Shared.css';
import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';
import car from '../../assets/img/car-wireframe.png';

import './index.css';

export default function App() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
            }}
        >
            <SideBar />

            <div
                style={{
                    width: '100%',
                    height: '100px',
                    backgroundColor: '#1A2433',
                }}
            >
                <NavBar />
                <div
                    className="banner"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flex: 1,
                        // height: '65vh',
                        // marginLeft: '90px',
                        // backgroundImage: `url(${car})`,
                        // backgroundPosition: 'left',
                        // backgroundRepeat: 'no-repeat',
                    }}
                >
                    <p
                        id="title"
                        style={{
                            marginTop: '100px',
                        }}
                    >
                        Pesquisa de veículos <br /> do{' '}
                        <span> TradersClub </span>
                    </p>
                </div>
            </div>

            {/* <h1>Teste do Tradersclub</h1>; */}
        </div>
    );
}
