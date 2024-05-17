import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

const QRScanner = () => {
    const [decodedText, setDecodedText] = useState('');

    const handleResult = (text, result) => {
        if (text) {
            setDecodedText(text);
        }
    };

    return (
        <div style={{ maxWidth: '300px', maxHeight: '300px', margin: 'auto' }}>
            <Scanner
                onResult={handleResult}
                onError={(error) => console.log(error?.message)}
            />
            {decodedText && (
                <p style={{ marginTop: '10px' }}>
                    {decodedText}
                </p>
            )}
        </div>
    );
};

export default QRScanner;
