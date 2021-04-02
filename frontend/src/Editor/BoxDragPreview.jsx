import React, { useEffect, useState, memo } from 'react';
import { Box } from './Box';
const styles = {
    display: 'inline-block',
    width: 160,
    height: 80,
    background: '#a1bdf6',
};
export const BoxDragPreview = memo(function BoxDragPreview({ component }) {
    const [tickTock, setTickTock] = useState(false);
    useEffect(function subscribeToIntervalTick() {
        const interval = setInterval(() => setTickTock(!tickTock), 500);
        return () => clearInterval(interval);
    }, [tickTock]);
    return (<div style={styles}>
				whatever
			</div>);
});