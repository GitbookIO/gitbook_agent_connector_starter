import { RuntimeContext } from '@gitbook/runtime';

export interface Message {
    type: 'message';
    role: 'assistant' | 'user' | 'team-member';
    body: string;
}

export interface ConversationPart {
    message: Message;
}

export interface GitBookConversation {
    id: string;
    parts: ConversationPart[];
}

export type TaskPayload = {
    type: 'fetchAndIngestData';
};

export type IntegrationContext = RuntimeContext<any, TaskPayload>;
