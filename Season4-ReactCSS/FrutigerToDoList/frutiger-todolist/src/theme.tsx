import { createTheme } from '@mui/material/styles';
import type { ThemeOptions, PaletteMode } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#4DADE8' }, // Sky Glass
          secondary: { main: '#6BC1FF' }, // Soft Frost
          background: {
            default: '#F5F8FA', // Mist White
            paper: 'rgba(255,255,255,0.85)', // Frosted Glass
          },
          text: {
            primary: '#1F2D3A', // Charcoal
            secondary: '#5A6B7C', // Slate Gray
          },
          success: { main: '#33C48D' }, // Spring Leaf
          warning: { main: '#FFB74D' }, // Amber Glow
          error: { main: '#E14F4F' }, // Ember
          accent: { main: '#FF8C72' }, // Accent customizado
        }
      : {
          primary: { main: '#3390CC' }, // Night Sky
          secondary: { main: '#5ABEFF' }, // Neon Frost
          background: {
            default: '#0F1A26', // Deep Mist
            paper: 'rgba(25,40,60,0.85)', // Dark Frost
          },
          text: {
            primary: '#E8EDF4', // Light Cloud
            secondary: '#A3B1C1', // Silver Mist
          },
          success: { main: '#2DBE8C' }, // Emerald Flash
          warning: { main: '#E6A451' }, // Warm Amber
          error: { main: '#D95656' }, // Crimson Pulse
          accent: { main: '#FF9A80' }, // Sunset Glow
        }),
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: [
      'Frutiger',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(14px)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          padding: '0.75rem 1.25rem',
          transition: 'filter .15s ease, background .2s ease',
          '&:hover': {
            filter: 'brightness(1.05)',
          },
        },
        containedPrimary: {
          color: '#fff',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 20px 40px -10px rgba(31,45,58,0.1)',
          padding: '1.5rem',
        },
      },
    },
  },
});

export const getTheme = (mode: PaletteMode) => createTheme(getDesignTokens(mode));
