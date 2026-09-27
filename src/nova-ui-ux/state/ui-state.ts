export type UIState = 'idle' | 'loading' | 'refreshing' | 'populated' | 'empty' | 'partial' | 'validating' | 'error' | 'offline' | 'forbidden' | 'unauthenticated' | 'expired' | 'success' | 'disabled' | 'confirming' | 'degraded';

export interface StatePresentation { state: UIState; message?: string; retry?: boolean; preserveData?: boolean; actionLabel?: string; }

export const statePresentation = (state: UIState): StatePresentation => ({
  state,
  retry: ['error', 'offline', 'degraded'].includes(state),
  preserveData: ['refreshing', 'partial', 'degraded', 'offline'].includes(state)
});
