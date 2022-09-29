'use strict';

async function main(projectId) {
    const { CloudFunctionsServiceClient } = require('@google-cloud/functions');

    // TODO(developer): replace with your prefered project ID.
    // const projectId = 'my-project'

    // Creates a client
    const client = new CloudFunctionsServiceClient();

    // project = 'my-project/*/locations/*' // Get the functions for a project.
    async function listFunctions() {
        const [functions] = await client.listFunctions({
            //   parent: `projects/${projectId}/locations/-`,
            parent: `projects/prueba-tecnica-delfosti/locations/us-central1`,
            // parent: `projects/prueba-tecnica-delfosti/locations/us-central1/functions/generar-token`,
        });
        console.info(functions);
    }
    listFunctions();
    // [END cloud_nodejs_functions_quickstart]
}

main(...process.argv.slice(2)).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
});
process.on('unhandledRejection', err => {
    console.error(err.message);
    process.exitCode = 1;
});