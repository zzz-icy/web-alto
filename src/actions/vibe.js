// LOAD_DRIVER

export const loadVibe = () => ({
    type: 'LOAD_VIBE_REQUEST',
});

export const loadVibeSuccess = (data) => ({
    type: 'LOAD_VIBE_SUCCESS',
    data
});

export const loadVibeError = (error) => ({
    type: 'LOAD_VIBE_FAILURE',
    error
});