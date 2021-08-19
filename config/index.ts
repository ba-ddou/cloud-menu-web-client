import { config } from 'dotenv';
config();
export const {
    API_URL,
    BRANCH_NAME,
    COMMIT_HASH,
    PIPELINE_ID,
    DEPLOYMENT_DATE,
    DEPLOYED_COMMIT_AUTHOR,
} = process.env;



