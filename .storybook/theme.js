import { create } from '@storybook/theming';
import logo from './components.svg';

export default create({
    base: 'light',
    brandTitle: 'slidey Components',
    brandImage: logo,
    brandTarget: '_self',
});
