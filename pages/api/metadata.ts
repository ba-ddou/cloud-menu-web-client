import {
    BRANCH_NAME,
    COMMIT_HASH,
    DEPLOYED_COMMIT_AUTHOR,
    DEPLOYMENT_DATE,
    PIPELINE_ID
} from '@root/config'

export default (req, res) => {
    res.status(200).json({
        BRANCH_NAME,
        COMMIT_HASH,
        DEPLOYED_COMMIT_AUTHOR,
        DEPLOYMENT_DATE,
        PIPELINE_ID
    });
}
