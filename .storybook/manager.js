import { addons } from '@storybook/addons';
import theme from './theme';

import faviconPNG from './favicon.png';
import faviconSVG from './favicon.svg';

addons.setConfig({
    theme: theme,
});

const link = document.createElement('link');
link.setAttribute('rel', 'icon');
link.setAttribute('type', 'image/svg+xml');
link.setAttribute('href', faviconSVG);
document.head.appendChild(link);

const linkTwo = document.createElement('link');
link.setAttribute('rel', 'icon');
link.setAttribute('type', 'image/png');
link.setAttribute('href', faviconPNG);
document.head.appendChild(linkTwo);
