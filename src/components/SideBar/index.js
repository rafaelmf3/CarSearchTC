import React from 'react';

import logotc from '../../assets/img/logo-tc.png';

export default function SideBar() {
    return (
        <div
            style={{
                backgroundColor: '#0E1823',
                width: '400px',
                display: 'flex',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <img
                src={logotc}
                alt="logotc"
                style={{ height: '100px', marginTop: '50px' }}
            />
        </div>
    );
}
