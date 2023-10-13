import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <div className="App">
        <div className="container_about_sphynx">
            <h1 className="title">Факты о сфинксах</h1>
            <img src="image/sphynx.jpg" alt=""/>
            <div className="container_facts">
                <ol className="block_facts">
                    <li className="fact">Сфинксы не совсем лысые.</li>
                    <li className="fact">Они не гипоаллергенны.</li>
                    <li className="fact">Они теплее, чем большинство других кошек.</li>
                    <li className="fact">Они нуждаются в еженедельной купании.</li>
                    <li className="fact">У Сфинксов очень чувствительная кожа.</li>
                    <li className="fact">Сфинксы много едят.</li>
                    <li className="fact">Сфинксы очень дружелюбны.</li>
                </ol>
            </div>
        </div>
    </div>
);