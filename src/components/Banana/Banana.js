import './Banana.css';

import React, { useState } from 'react';

export default function Banana() {

    const [bankBalance, setBalance] = useState(0);
    let input;
    function addBalance() {
        input = Number(document.getElementById('1').value);
        setBalance(bankBalance + input);
    }
    function remBalance() {
        input = Number(document.getElementById('1').value);
        setBalance(bankBalance - input);
    }

    return (
        <div className='header'>
            <h1 id='title'>Banana Bank</h1>
            <div className='konto'>
                <h1>Dein Girokonto</h1>
                <div>
                    <h2 className='saldo'>{bankBalance}€</h2>
                    <input id='1' placeholder='Gib einen Geldbetrag ein' type="number"></input>
                </div>
                <button onClick={addBalance} className='einzahlen' >Einzahlen</button>
                <button onClick={remBalance} className='auszahlen'>Auszahlen</button>
            </div>
        </div >
    );
}
