import { Resend } from 'resend';

export const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_EMAIL_SERVICE_KEY);