export type ColorToken = string;

export interface NovaDesignTokens {
  color: Record<string, ColorToken>;
  typography: { families: Record<string, string>; sizes: Record<string, number>; weights: Record<string, number>; lineHeights: Record<string, number>; tracking: Record<string, number> };
  spacing: Record<string, number>;
  radius: Record<string, number>;
  elevation: Record<string, string>;
  motion: Record<string, { duration: number; easing: string }>;
  zIndex: Record<string, number>;
  density: 'compact' | 'comfortable' | 'spacious';
}

export const createSemanticTokens = (): NovaDesignTokens => ({
  color: { background: 'var(--nova-background)', surface: 'var(--nova-surface)', foreground: 'var(--nova-foreground)', muted: 'var(--nova-muted)', accent: 'var(--nova-accent)', destructive: 'var(--nova-destructive)', success: 'var(--nova-success)', warning: 'var(--nova-warning)', info: 'var(--nova-info)', border: 'var(--nova-border)', focus: 'var(--nova-focus)' },
  typography: { families: { display: 'var(--nova-font-display)', body: 'var(--nova-font-body)', mono: 'var(--nova-font-mono)' }, sizes: { xs: 12, sm: 14, md: 16, lg: 18, xl: 24, '2xl': 32, '3xl': 40, '4xl': 56 }, weights: { regular: 400, medium: 500, semibold: 600, bold: 700 }, lineHeights: { tight: 1.1, normal: 1.45, relaxed: 1.65 }, tracking: { tight: -0.02, normal: 0, wide: 0.04 } },
  spacing: { '0': 0, '1': 4, '2': 8, '3': 12, '4': 16, '5': 20, '6': 24, '8': 32, '10': 40, '12': 48, '16': 64, '20': 80, '24': 96 },
  radius: { sm: 6, md: 10, lg: 16, xl: 24, pill: 9999 },
  elevation: { none: 'none', sm: 'var(--nova-shadow-sm)', md: 'var(--nova-shadow-md)', lg: 'var(--nova-shadow-lg)' },
  motion: { fast: { duration: 140, easing: 'ease-out' }, normal: { duration: 220, easing: 'ease-out' }, slow: { duration: 420, easing: 'ease-in-out' } },
  zIndex: { base: 0, sticky: 20, dropdown: 40, overlay: 60, modal: 80, toast: 100 },
  density: 'comfortable'
});
