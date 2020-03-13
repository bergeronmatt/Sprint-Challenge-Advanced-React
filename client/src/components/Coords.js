import { useState, useRef, useEffect, useCallback } from 'react';


function useEventListener(eventName, handler, element = window) {
    const saveHandler = useRef(0);

    useEffect(() => {
        saveHandler.current = handler;
    }, [handler]);

    useEffect(() =>{
        const isSupported = element && element.addEventListener;
        if(!isSupported) return;

        const eventListener = e => saveHandler.current(e);

        element.addEventListener(eventName, eventListener);

        return () => {
            element.removeEventListener(eventName, eventListener)
        }
    }, [eventName, element]);
}

export default useEventListener;