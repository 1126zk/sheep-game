import { Theme } from '../interface';
import {
    DEFAULT_BGM_STORAGE_KEY,
    DEFAULT_CLICK_SOUND_STORAGE_KEY,
    DEFAULT_TRIPLE_SOUND_STORAGE_KEY,
} from '../../utils';

const icons = <const>[
    `π¨`,
    `π`,
    `βοΈ`,
    `π»`,
    `π`,
    `π―`,
    `π€`,
    `πΌ`,
    `π`,
    `π`,
];

export type DefaultSoundNames = 'button-click' | 'triple';

export const getDefaultTheme: () => Theme<DefaultSoundNames> = () => {
    return {
        title: 'ζθ§£ηηΎδΊδΈͺηΎ',
        desc: 'ηηε―δ»₯ιε³~',
        dark: true,
        backgroundColor: '#8dac85',
        icons: icons.map((icon) => ({
            name: icon,
            content: icon,
            clickSound: 'button-click',
            tripleSound: 'triple',
        })),
        sounds: [
            {
                name: 'button-click',
                src:
                    localStorage.getItem(DEFAULT_CLICK_SOUND_STORAGE_KEY) || '',
            },
            {
                name: 'triple',
                src:
                    localStorage.getItem(DEFAULT_TRIPLE_SOUND_STORAGE_KEY) ||
                    '',
            },
        ],
        bgm: localStorage.getItem(DEFAULT_BGM_STORAGE_KEY) || '',
    };
};
