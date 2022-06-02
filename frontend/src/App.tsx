import { useEffect, useState } from 'react';
import liff from '@line/liff';
import { useBarcode } from 'react-barcodes';
import './App.css';

function App() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const { inputRef } = useBarcode({ value: 'react' });

    useEffect(() => {
        liff.init({
            liffId: import.meta.env.VITE_LIFF_ID,
        })
            .then(() => {
                setMessage('LIFF init succeeded.');
            })
            .catch((e: Error) => {
                setMessage('LIFF init failed.');
                setError(`${e}`);
            });
    });

    return (
        <div className="App">
            <h1>create-liff-app</h1>
            {message && <p>{message}</p>}
            {error && (
                <p>
                    <code>{error}</code>
                </p>
            )}
            <a
                href="https://developers.line.biz/ja/docs/liff/"
                target="_blank"
                rel="noreferrer"
            >
                LIFF Documentation
            </a>
            <svg ref={inputRef} />
        </div>
    );
}

export default App;
