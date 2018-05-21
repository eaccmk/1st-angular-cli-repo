import { browser } from 'protractor';

export const environmentUrls = {
    local: { baseURI: `https://localhost:${browser.params.localPort || 8080}`, path: '' },
    eaccmk: { baseURI: 'https://eaccmk.github.io', path: '' }
};
