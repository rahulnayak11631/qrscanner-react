import { useEffect } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

const QRScanner = () => {
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                // Do nothing, just request the camera access
            })
            .catch(err => {
                console.error("Error accessing the camera: ", err);
            });
    }, []);

    return (
        <div style={{ maxWidth: '300px', maxHeight: '300px', margin: 'auto' }}>
            <Scanner
                onResult={(text, result) => console.log(text, result)}
                onError={(error) => console.log(error?.message)}
            />
        </div>
    );
}

export default QRScanner;
