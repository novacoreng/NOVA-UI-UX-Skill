export interface FieldState<T = unknown> { value: T; touched: boolean; dirty: boolean; validating: boolean; error?: string; warning?: string; }
export interface FormPolicy { validateOn: 'blur' | 'change' | 'submit' | 'hybrid'; disableWhileSubmitting: boolean; preserveValuesOnError: boolean; announceErrors: boolean; }
export const defaultFormPolicy: FormPolicy = { validateOn: 'hybrid', disableWhileSubmitting: true, preserveValuesOnError: true, announceErrors: true };

export interface OTPPolicy { digits: number; autoAdvance: boolean; paste: boolean; resendCooldownSeconds: number; mask: boolean; }
export const defaultOTPPolicy: OTPPolicy = { digits: 6, autoAdvance: true, paste: true, resendCooldownSeconds: 30, mask: false };
