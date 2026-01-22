import { RuntimeContext } from '@gitbook/runtime';

export const ingestData = async (data: any, context: RuntimeContext<any>, installation: any) => {
    // Ingest data into GitBook Agent
    await context.api.orgs.ingestConversation(installation.target.organization, data);
};
