import { Config } from '../../core';
import { SESSION_DEFAULT_ABSOLUTE_TIMEOUT, SESSION_DEFAULT_INACTIVITY_TIMEOUT } from './constants';

export function getTimeouts(): { absoluteTimeout: number, inactivityTimeout: number } {
    const inactivityTimeout = Config.get(
        'settings.session.expirationTimeouts.inactivity',
        'number',
        SESSION_DEFAULT_INACTIVITY_TIMEOUT
    );
    if (inactivityTimeout < 0) {
        throw new Error(
            '[CONFIG] The value of settings.session.expirationTimeouts.inactivity must be a positive number.'
        );
    }

    const absoluteTimeout = Config.get(
        'settings.session.expirationTimeouts.absolute',
        'number',
        SESSION_DEFAULT_ABSOLUTE_TIMEOUT,
    );
    if (absoluteTimeout < 0) {
        throw new Error(
            '[CONFIG] The value of settings.session.expirationTimeouts.absolute must be a positive number.'
        );
    }

    if (absoluteTimeout < inactivityTimeout) {
        throw new Error(
            '[CONFIG] The value of settings.session.expirationTimeouts.absolute must be greater than *.inactivity.'
        );
    }

    return { absoluteTimeout, inactivityTimeout };
}
