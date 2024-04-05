import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';

const SCREENS = {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
    '3xl': 1920
};

export function screenToPx(screen: number) {
    return `${screen}px`;
}

export function screenUp(screen: number) {
    return { min: screenToPx(screen) };
}

export function screenDown(screen: number) {
    return { max: screenToPx(screen - 1) };
}

const config: Config = {
    content: [
        './src/main/**/*.{js,ts,jsx,tsx,mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            fontFamily: {
                primary: ['Inter', ...defaultTheme.fontFamily.sans],
                sans: ['var(--font-verdana)'],
                notoSans: 'Noto-Sans'
            },
            colors: {
                primary: {
                    200: 'var(--mag-colors-primary-200, #EBB7D5)',
                    500: 'var(--mag-colors-primary-500, #BD0F72)',
                    900: 'var(--mag-colors-primary-900, #520743)',
                    DEFAULT: '#BD0F72'
                },
                secondary: {
                    400: 'var(--secondary-mag-colors-secondary-400, #5AA7AD)',
                    500: 'var(--secondary-mag-colors-secondary-500, #2F728C)'
                },
                second: '#00506D',
                'one-666666': '#666666',
                'one-eff2f7': '#EFF2F7',
                'one-efe1f8': '#FEF1F8',
                grey: {
                    'darker-1': '#333333',
                    'darker-2': '#66707B',
                    'darker-5': '#C2C7CC',
                    'darker-6': '#D8DCDF'
                },
                pink: {
                    1000: '#BD1874',
                    2000: '#BD0F72'
                },

                error: 'var(--error-color)',
                success: 'var(--success-color)',
                warning: 'var(--warning-color)',
                neutral: {
                    200: 'var(--mag-colors-neutral-200, #D8DDE5)',
                    600: 'var(--mag-colors-neutral-600, #6C727A)',
                    700: 'var(--mag-colors-neutral-700, #555A61)',
                    800: 'var(--neutral-mag-colors-neutral-800, #43474C)',
                    900: 'var(--neutral-mag-colors-neutral-900, #333333)',
                    1000: 'var(--neutral-mag-colors-neutral-1000, #2C2D2E)'
                }
            },
            backgroundColor: {
                pink: '#BD1874',
                red: {
                    100: '#F8E7F1',
                    200: 'var(--Colors-testing-red---color-red-200, #F5BFBF) !important'
                }
            },
            fontSize: {
                xxs: '10px',
                xs: '12px',
                md: '16px',
                lg: '20px',
                xl: '24px'
            },
            textColor: ({ theme }: any) => ({
                ...theme('colors')
            }),

            borderColor: (theme: any) => ({
                ...theme('colors')
            }),
            zIndex: {
                45: 45,
                55: 55
            },
            boxShadow: {
                'box-md': '0px 6px 20px 0px rgba(51, 51, 51, 0.12);'
            },
            screens: {
                md: screenUp(SCREENS.md),
                lg: screenDown(SCREENS.lg),

                xl: screenUp(SCREENS.lg),
                xlDown: screenDown(SCREENS.xl),

                '2xl': screenUp(SCREENS.xl),
                '2xlDown': screenDown(SCREENS['2xl']),

                '3xl': screenUp(SCREENS['2xl']),
                '3xlDown': screenDown(SCREENS['3xl'])
            }
        } as any
    },
    plugins: [
        require('@tailwindcss/typography'),
        plugin(({ addComponents }) => {
            addComponents({
                '.tw-scrollbar': {
                    scrollbarColor: '#ccd3d1',
                    scrollbarWidth: 'thin',
                    '&::-webkit-scrollbar': {
                        '@apply w-2 h-2': {}
                    },
                    '&::-webkit-scrollbar-thumb': {
                        '@apply rounded-lg': {},
                        backgroundColor: '#ccd3d1'
                    },
                    '&::-webkit-scrollbar-track-piece:start': {
                        backgroundColor: 'transparent',
                        marginTop: '60px'
                    }
                },
                '.tw-ds-text-h4': {
                    '@apply font-notoSans': {},
                    fontSize: '1.4375rem',
                    lineHeight: '1.75rem',
                    letterSpacing: '-0.0125rem',
                    ['@screen 2xlDown']: {
                        fontSize: '1.1875rem',
                        lineHeight: '1.5rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '1.0625rem',
                        lineHeight: '1.375rem'
                    }
                },
                '.tw-ds-text-h4-2': {
                    '@apply font-notoSans': {},
                    fontSize: '1.25rem',
                    lineHeight: '1.5rem',
                    letterSpacing: '-0.0125rem'
                },
                '.tw-ds-text-body-1': {
                    '@apply font-notoSans': {},
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                    letterSpacing: '-0.1px'
                },
                '.tw-ds-text-body-2': {
                    '@apply font-notoSans': {},
                    fontSize: '0.9375rem',
                    lineHeight: '1.5rem',
                    letterSpacing: '-0.4px',
                    ['@screen 2xlDown']: {
                        fontSize: '0.8125rem',
                        lineHeight: '1.25rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.6875rem',
                        lineHeight: '1rem',
                        letterSpacing: '-0.2px'
                    }
                },
                '.tw-ds-text-body1-allcaps-regular': {
                    '@apply font-notoSans': {},
                    fontSize: '0.8125rem',
                    lineHeight: '1.25rem',
                    letterSpacing: '-0.025rem',
                    ['@screen xlDown']: {
                        fontSize: '0.6875rem',
                        lineHeight: '1rem',
                        letterSpacing: '-0.0125rem'
                    }
                },
                '.tw-ds-text-body1-allcaps-regular-1': {
                    '@apply font-notoSans': {},
                    fontSize: '0.8125rem',
                    lineHeight: '1.25rem',
                    letterSpacing: '-0.025rem',
                    fontWeight: 600,
                    ['@screen 2xlDown']: {
                        fontSize: '0.6875rem',
                        lineHeight: '1rem',
                        letterSpacing: '-0.0125rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.625rem',
                        lineHeight: '0.75rem',
                        letterSpacing: '-0.0125rem'
                    }
                },
                '.tw-ds-text-subtitle-1': {
                    '@apply font-notoSans': {},
                    fontSize: '1rem',
                    lineHeight: '1.125rem',
                    letterSpacing: '-0.1px'
                },
                '.tw-ds-text-subtitle-2': {
                    '@apply font-notoSans': {},
                    fontSize: '0.875rem',
                    lineHeight: '1rem',
                    letterSpacing: '-0.1px'
                },

                '.tw-ds-text-tiny-1': {
                    '@apply font-notoSans': {},
                    fontSize: '0.75rem',
                    lineHeight: '0.75rem',
                    letterSpacing: '-0.1px'
                },
                '.tw-ds-text-tiny-semibold-allcaps-1': {
                    '@apply font-notoSans': {},
                    fontSize: '0.75rem',
                    lineHeight: '0.875rem',
                    letterSpacing: '-0.1px',
                    fontWeight: 600
                },
                '.tw-ds-text-tiny-semibold-allcaps-2': {
                    '@apply font-notoSans': {},
                    fontSize: '0.625rem',
                    lineHeight: '0.75rem',
                    letterSpacing: '-0.1px',
                    fontWeight: 600
                },
                '.tw-ds-text-tiny-semibold': {
                    '@apply font-notoSans': {},
                    fontSize: '0.75rem',
                    lineHeight: '0.75rem',
                    fontStyle: 'normal',
                    letterSpacing: '-0.1px',
                    fontWeight: 600
                },
                '.tw-ds-text-body-small-2-semibold': {
                    '@apply font-notoSans': {},
                    fontSize: '0.75rem',
                    lineHeight: '1.125rem',
                    fontWeight: 600
                },
                '.tw-ds-text-h5': {
                    '@apply font-notoSans': {},
                    fontSize: '1.1875rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '1.5rem',
                    letterSpacing: '-0.0125rem',
                    ['@screen 2xlDown']: {
                        fontSize: '1.0625rem',
                        lineHeight: '1.375rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.9375rem',
                        lineHeight: '1.25rem'
                    }
                },
                '.tw-ds-text-summary-title': {
                    '@apply font-notoSans': {},
                    fontSize: '1.1875rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '1.5rem',
                    letterSpacing: '-0.0125rem',
                    ['@screen 2xlDown']: {
                        fontSize: '1.0625rem',
                        lineHeight: '1.375rem'
                    }
                },
                '.tw-ds-text-body-small-1': {
                    '@apply font-notoSans': {},
                    fontSize: '0.8125rem',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '1.25rem',
                    letterSpacing: '-0.4px',
                    ['@screen 2xlDown']: {
                        fontSize: '0.6875rem',
                        letterSpacing: '-0.2px',
                        lineHeight: '1rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.625rem',
                        lineHeight: '0.75rem',
                        letterSpacing: '-0.2px'
                    }
                },
                '.tw-ds-text-tiny-normal-allcaps-1': {
                    '@apply font-notoSans': {},
                    fontSize: '1rem',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '1.5rem',
                    letterSpacing: '-0.1px'
                },
                '.tw-ds-text-tiny-normal-allcaps-2': {
                    '@apply font-notoSans': {},
                    fontSize: '0.875rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '1.25rem',
                    letterSpacing: '-0.1px'
                },
                '.tw-ds-text-body1-regular': {
                    '@apply font-notoSans': {},
                    fontSize: '0.9375rem',
                    lineHeight: '1.5rem',
                    letterSpacing: '-0.025rem',
                    ['@screen 2xlDown']: {
                        fontSize: '0.8125rem',
                        lineHeight: '1.25rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.6875rem',
                        lineHeight: '1rem',
                        letterSpacing: '-0.0125rem'
                    }
                },
                '.tw-text-body1-regular-sm': {
                    '@apply font-notoSans': {},
                    fontSize: '0.9375rem',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '1.5rem',
                    letterSpacing: '-0.025rem',
                    ['@screen 2xlDown']: {
                        fontSize: '0.8125rem',
                        lineHeight: '1.25rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.6875rem',
                        lineHeight: '1rem',
                        letterSpacing: '-0.0125rem'
                    }
                },
                '.tw-ds-text-body1-regular-1': {
                    '@apply font-notoSans': {},
                    fontSize: '0.9375rem',
                    lineHeight: '1.5rem',
                    letterSpacing: '-0.1px',
                    fontWeight: 600,
                    ['@screen 2xlDown']: {
                        fontSize: '0.8125rem',
                        lineHeight: '1.25rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.6875rem',
                        lineHeight: '1rem',
                        letterSpacing: '-0.0125rem'
                    }
                },
                '.tw-text-body1-regular': {
                    '@apply font-notoSans': {},
                    fontSize: '0.9375rem',
                    lineHeight: '1.5rem',
                    letterSpacing: '-0.4px',
                    fontWeight: 400,
                    ['@screen 2xlDown']: {
                        fontSize: '0.8125rem',
                        lineHeight: '1.25rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.6875rem',
                        lineHeight: '1rem',
                        letterSpacing: '-0.2px'
                    }
                },
                '.tw-text-body1-semibold-lg': {
                    '@apply font-notoSans': {},
                    fontSize: '15px !important',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '24px' /* 160% */,
                    letterSpacing: '-0.4px'
                },
                '.tw-text-body1-regular-lg': {
                    '@apply font-notoSans': {},
                    fontSize: '15px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '24px' /* 160% */,
                    letterSpacing: '-0.4px'
                },
                '.tw-ds-text-body1-semibold': {
                    '@apply font-notoSans': {},
                    fontSize: '0.9375rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '1.5rem',
                    letterSpacing: '-0.025rem',
                    ['@screen 2xlDown']: {
                        fontSize: '0.8125rem',
                        lineHeight: '1.25rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.6875rem',
                        lineHeight: '1rem',
                        letterSpacing: '-0.0125rem'
                    }
                },
                '.tw-ds-text-body2-regular': {
                    '@apply font-notoSans': {},
                    fontSize: '0.8125rem',
                    lineHeight: '1.25rem',
                    letterSpacing: '-0.025rem',
                    ['@screen 2xlDown']: {
                        fontSize: '0.6875rem',
                        lineHeight: '1rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.625rem',
                        lineHeight: '0.75rem',
                        letterSpacing: '-0.0125rem'
                    }
                },
                '.tw-ds-text-body2-semibold': {
                    '@apply font-notoSans': {},
                    fontSize: '0.8125rem',
                    lineHeight: '1.25rem',
                    letterSpacing: '-0.025rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    ['@screen 2xlDown']: {
                        fontSize: '0.688rem',
                        lineHeight: '1.25rem',
                        letterSpacing: '-0.0125rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.625rem',
                        lineHeight: '1rem',
                        letterSpacing: '-0.0125rem'
                    }
                },
                '.tw-ds-text-body2-allcaps-semibold': {
                    '@apply font-notoSans': {},
                    fontSize: '0.8125rem',
                    lineHeight: '1.25rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    letterSpacing: '-0.025rem',
                    ['@screen 2xlDown']: {
                        fontSize: '0.6875rem',
                        lineHeight: '1rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.625rem',
                        lineHeight: '0.75rem',
                        letterSpacing: '-0.0125rem'
                    }
                },
                '.tw-ds-text-body3-regular': {
                    '@apply font-notoSans': {},
                    fontSize: '0.813rem',
                    lineHeight: '1.25rem',
                    letterSpacing: '-0.0125rem',
                    ['@screen 2xlDown']: {
                        fontSize: '0.688rem',
                        lineHeight: '1rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.625rem',
                        lineHeight: '0.75rem'
                    }
                },
                '.tw-ds-text-body3-semibold': {
                    '@apply font-notoSans': {},
                    fontSize: '0.6875rem',
                    lineHeight: '1rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    letterSpacing: '-0.0125rem',
                    ['@screen 2xlDown']: {
                        fontSize: '0.625rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.625rem'
                    }
                },
                '.tw-ds-text-body4-semibold': {
                    '@apply font-notoSans': {},
                    fontSize: '0.625rem',
                    lineHeight: '0.75rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    letterSpacing: '-0.0125rem'
                },
                '.tw-ds-text-button': {
                    '@apply font-notoSans': {},
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    lineHeight: '1.5rem',
                    letterSpacing: '-0.00625rem',
                    ['@screen 2xlDown']: {
                        fontSize: '0.8125rem',
                        lineHeight: '1.25rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.6875rem',
                        lineHeight: '1rem'
                    }
                },
                '.tw-text-body2-regular-lg': {
                    '@apply font-notoSans': {},
                    fontSize: '0.8125rem',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '1.25rem' /* 153.846% */,
                    letterSpacing: '-0.025rem'
                },
                '.tw-text-body2-regular-md': {
                    '@apply font-notoSans': {},
                    fontSize: '0.6875rem',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '1rem' /* 153.846% */,
                    letterSpacing: '-0.0125rem'
                },
                '.tw-text-body2-regular-sm': {
                    '@apply font-notoSans': {},
                    fontSize: '0.625rem',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '.75rem' /* 153.846% */,
                    letterSpacing: '-0.0125rem'
                },
                '.tw-text-body2-semibold-lg': {
                    '@apply font-notoSans': {},
                    fontSize: '0.8125rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '1.25rem' /* 160% */,
                    letterSpacing: '-0.025rem',
                    ['@screen 2xlDown']: {
                        fontSize: '0.6875rem',
                        lineHeight: '1rem',
                        letterSpacing: '-0.0125rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.625rem',
                        lineHeight: '0.75rem'
                    }
                },
                '.tw-text-body2-semibold-md': {
                    '@apply font-notoSans': {},
                    fontSize: '.6875rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '1rem' /* 153.846% */,
                    letterSpacing: '-0.025rem'
                },
                '.tw-text-body2-semibold-sm': {
                    '@apply font-notoSans': {},
                    fontSize: '.625rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '.75rem' /* 145.455% */,
                    letterSpacing: '-0.0125rem'
                },
                '.tw-text-h5-lg': {
                    '@apply font-notoSans': {},
                    fontSize: '1.1875rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '1.5rem' /* 129.412% */,
                    letterSpacing: '-0.0125rem',
                    ['@screen 2xlDown']: {
                        fontSize: '1.0625rem',
                        lineHeight: '1.375rem'
                    },
                    ['@screen xlDown']: {
                        fontSize: '0.9375rem',
                        lineHeight: '1.25rem'
                    }
                },
                '.tw-text-h5-md': {
                    '@apply font-notoSans': {},
                    fontSize: '1.0625rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '1.375rem' /* 129.412% */,
                    letterSpacing: '-0.0125rem'
                },
                '.tw-text-h5-sm': {
                    '@apply font-notoSans': {},
                    fontSize: '.9375rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '1.375rem' /* 129.412% */,
                    letterSpacing: '-0.0125rem'
                }
            } as any);
        })
    ],
    corePlugins: { preflight: false }, // This is a config for ONE/magenta
    prefix: 'tw-'
};
export default config;
