import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "class"],
  theme: {
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '1rem',
  			lg: '1.5rem'
  		},
  		screens: {
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1360px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			manrope: ['var(--font-manrope)', 'sans-serif'],
  			'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			navy: {
  				DEFAULT: 'hsl(var(--color-navy))',
  				foreground: 'hsl(var(--color-navy-foreground))'
  			},
  			blue: {
  				DEFAULT: 'hsl(var(--color-blue))',
  				foreground: 'hsl(var(--color-blue-foreground))'
  			},
  			purple: {
  				DEFAULT: 'hsl(var(--color-purple))',
  				foreground: 'hsl(var(--color-purple-foreground))'
  			},
  			yellow: {
  				DEFAULT: 'hsl(var(--color-yellow))',
  				foreground: 'hsl(var(--color-yellow-foreground))'
  			},
  			'brand-secondary': {
  				DEFAULT: 'hsl(var(--brand-secondary))',
  				foreground: 'hsl(var(--brand-secondary-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontSize: {
  			'title-hero': [
  				'var(--font-title-hero)',
  				{
  					lineHeight: 'var(--line-title-hero)'
  				}
  			],
  			'title-hero-sm': [
  				'var(--font-title-hero-sm)',
  				{
  					lineHeight: 'var(--line-title-hero-sm)'
  				}
  			],
  			'title-page': [
  				'var(--font-title-page)',
  				{
  					lineHeight: 'var(--line-title-page)'
  				}
  			],
  			'title-1': [
  				'var(--font-title-1)',
  				{
  					lineHeight: 'var(--line-title-1)'
  				}
  			],
  			'title-1-sm': [
  				'var(--font-title-1-sm)',
  				{
  					lineHeight: 'var(--line-title-1-sm)'
  				}
  			],
  			'title-2': [
  				'var(--font-title-2)',
  				{
  					lineHeight: 'var(--line-title-2)'
  				}
  			],
  			'title-2-alt': [
  				'var(--font-title-2-alt)',
  				{
  					lineHeight: 'var(--line-title-2-alt)'
  				}
  			],
  			'heading-1': [
  				'var(--font-heading-1)',
  				{
  					lineHeight: 'var(--line-heading-1)'
  				}
  			],
  			'heading-2': [
  				'var(--font-heading-2)',
  				{
  					lineHeight: 'var(--line-heading-2)'
  				}
  			],
  			'subtitle-1': [
  				'var(--font-subtitle-1)',
  				{
  					lineHeight: 'var(--line-subtitle-1)'
  				}
  			],
  			'subtitle-2': [
  				'var(--font-subtitle-2)',
  				{
  					lineHeight: 'var(--line-subtitle-2)'
  				}
  			],
  			'body-base': [
  				'var(--font-body-base)',
  				{
  					lineHeight: 'var(--line-body-base)'
  				}
  			],
  			'body-base-alt': [
  				'var(--font-body-base-alt)',
  				{
  					lineHeight: 'var(--line-body-base-alt)'
  				}
  			],
  			'body-small': [
  				'var(--font-body-small)',
  				{
  					lineHeight: 'var(--line-body-small)'
  				}
  			],
  			'body-small-alt': [
  				'var(--font-body-small-alt)',
  				{
  					lineHeight: 'var(--line-body-small-alt)'
  				}
  			],
  			label: [
  				'var(--font-label)',
  				{
  					lineHeight: 'var(--line-label)'
  				}
  			],
  			'label-small': [
  				'var(--font-label-small)',
  				{
  					lineHeight: 'var(--line-label-small)'
  				}
  			],
  			'm3-display-lg': [
  				'var(--font-m3-display-lg)',
  				{
  					lineHeight: 'var(--line-m3-display-lg)'
  				}
  			],
  			'm3-display-md': [
  				'var(--font-m3-display-md)',
  				{
  					lineHeight: 'var(--line-m3-display-md)'
  				}
  			],
  			'm3-display-sm': [
  				'var(--font-m3-display-sm)',
  				{
  					lineHeight: 'var(--line-m3-display-sm)'
  				}
  			],
  			'm3-headline-lg': [
  				'var(--font-m3-headline-lg)',
  				{
  					lineHeight: 'var(--line-m3-headline-lg)'
  				}
  			],
  			'm3-headline-md': [
  				'var(--font-m3-headline-md)',
  				{
  					lineHeight: 'var(--line-m3-headline-md)'
  				}
  			],
  			'm3-headline-sm': [
  				'var(--font-m3-headline-sm)',
  				{
  					lineHeight: 'var(--line-m3-headline-sm)'
  				}
  			],
  			'm3-title-lg': [
  				'var(--font-m3-title-lg)',
  				{
  					lineHeight: 'var(--line-m3-title-lg)'
  				}
  			],
  			'm3-title-md': [
  				'var(--font-m3-title-md)',
  				{
  					lineHeight: 'var(--line-m3-title-md)'
  				}
  			],
  			'm3-title-sm': [
  				'var(--font-m3-title-sm)',
  				{
  					lineHeight: 'var(--line-m3-title-sm)'
  				}
  			],
  			'm3-label-lg': [
  				'var(--font-m3-label-lg)',
  				{
  					lineHeight: 'var(--line-m3-label-lg)'
  				}
  			],
  			'm3-label-md': [
  				'var(--font-m3-label-md)',
  				{
  					lineHeight: 'var(--line-m3-label-md)'
  				}
  			],
  			'm3-label-sm': [
  				'var(--font-m3-label-sm)',
  				{
  					lineHeight: 'var(--line-m3-label-sm)'
  				}
  			],
  			'm3-body-lg': [
  				'var(--font-m3-body-lg)',
  				{
  					lineHeight: 'var(--line-m3-body-lg)'
  				}
  			],
  			'm3-body-md': [
  				'var(--font-m3-body-md)',
  				{
  					lineHeight: 'var(--line-m3-body-md)'
  				}
  			],
  			'm3-body-sm': [
  				'var(--font-m3-body-sm)',
  				{
  					lineHeight: 'var(--line-m3-body-sm)'
  				}
  			]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
