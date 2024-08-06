import { v4 as uuidv4 } from './uuid.js';

export const getSessionId = () => {
    const sessionId = localStorage.getItem('session_id');
    if (sessionId) {
        return sessionId;
    }
    const newSessionId = uuidv4();
    localStorage.setItem('session_id', newSessionId);
    return newSessionId;
};