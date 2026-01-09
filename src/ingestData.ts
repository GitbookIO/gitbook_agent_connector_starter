import { RuntimeContext } from '@gitbook/runtime';

export const ingestData = async (data: any, context: RuntimeContext<any>) => {
    // Ingest data into GitBook Agent
    await context.api.orgs.ingestConversation(
        context.environment.installation.target.organization,
        data
    );
};
