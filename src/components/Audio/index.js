import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer = ({ mp3File }) => {
    const audioRef = useRef(null);
    const [audioLoaded, setAudioLoaded] = useState(false);

    const handleCanPlayThrough = () => {
        setAudioLoaded(true);
    };

    useEffect(() => {
        audioRef.current.src = mp3File;
        audioRef.current.load();

        audioRef.current.addEventListener(
            'canplaythrough',
            handleCanPlayThrough
        );

        if (audioLoaded) {
            audioRef.current.play();
        }

        return () => {
            audioRef.current.removeEventListener(
                'canplaythrough',
                handleCanPlayThrough
            );
        };
    }, [mp3File, audioLoaded]);

    return (
        <div>
            <audio ref={audioRef} />
        </div>
    );
};

export default AudioPlayer;
