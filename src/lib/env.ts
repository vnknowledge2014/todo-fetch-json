import { resolve } from 'path';
import { config } from 'dotenv';

config({ path: resolve(__dirname, '../../.env') });

const URL: string = process.env.URL;
export default URL;
