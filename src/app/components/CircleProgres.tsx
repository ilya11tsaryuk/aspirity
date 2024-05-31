import React from 'react';
import { Box, Typography } from '@mui/material';
import { CircularProgress } from '@mui/material'

const CircleProgress = ({ size = 160, redVal, yellowVal, greenVal }: { redVal: number, yellowVal: number, greenVal: number, size?: number }) => {
    const sum = redVal + yellowVal + greenVal

    const redPercent = (redVal / sum) * 100;
    const yellowPercent = (yellowVal / sum) * 100;
    const greenPercent = (greenVal / sum) * 100;

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'inline-block',
                width: size,
                height: size,
                margin: 'auto'
            }}
        >
            <div
                className='flex flex-col gap-1 items-center'
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <p style={{ lineHeight: '36px' }} className='text-4xl'>{greenVal}</p>
                <p style={{ lineHeight: '24px' }} className='text-sm text-tertiary'>дня</p>
            </div>
            <CircularProgress value={redPercent} variant='determinate' size={size} sx={{
                color: '#DB4546',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-90deg) !important',
            }} />
            <CircularProgress value={yellowPercent} variant='determinate' size={size} sx={{
                color: '#FFB649',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${-90 + (360 * (redPercent / 100))}deg) !important`,
            }} />
            <CircularProgress value={greenPercent} variant='determinate' size={size} sx={{
                color: '#25824F',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${-90 + (360 * ((redPercent + yellowPercent) / 100))}deg) !important`,
            }} />

        </Box >
    );
};

export default CircleProgress;
