import { createIntegration } from '@gitbook/runtime';

import { fetchData } from './fetchData';
import { ingestData } from './ingestData';
import { transformDataToGitBook } from './transformDatatoGitBook';
import { IntegrationContext } from './types';

const fetchAndIngestData = async (context: IntegrationContext, installation: any) => {
    // Fetch data from the source
    const data = await fetchData(installation);
    // Transform data to the format expected by GitBook Agent
    const transformedData = await transformDataToGitBook(data);
    // Ingest data into GitBook Agent
    await ingestData(transformedData, context, installation);
};

export default createIntegration<IntegrationContext>({
    events: {
        /**
         * When the integration is installed, we fetch data from the source, transform it to the format expected by GitBook Agent, and ingest it into GitBook Agent.
         * We also schedule the recurring task to run the next day.
         */
        installation_setup: async (_, context) => {
            await fetchAndIngestData(context, context.environment.installation);
            // Schedule the next task to run the next day
            await context.integration.queueTask({
                task: {
                    type: 'fetchAndIngestData',
                    installation: context.environment.installation.id,
                },
                schedule: 86400, // 24 hours
            });
        },
    },
    /**
     * When the task is triggered, we fetch data from the source, transform it to the format expected by GitBook Agent, and ingest it into GitBook Agent.
     * After completion, we schedule the next task to run the next day.
     */
    task: async (task, context) => {
        if (task.type === 'fetchAndIngestData') {
            const { data: installation } =
                await context.api.integrations.getIntegrationInstallationById(
                    context.environment.integration.name,
                    task.installation
                );
            await fetchAndIngestData(context, installation);
            // Schedule the next task to run the next day
            await context.integration.queueTask({
                task: {
                    type: 'fetchAndIngestData',
                    installation: installation.id,
                },
                schedule: 86400, // 24 hours
            });
        }
    },
});
