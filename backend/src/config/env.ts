import dotenv from "dotenv";

dotenv.config();

export const env = {
    RESEND_API_KEY: process.env.RESEND_API_KEY!,
    PORT: Number(process.env.PORT) || 5000,
};
