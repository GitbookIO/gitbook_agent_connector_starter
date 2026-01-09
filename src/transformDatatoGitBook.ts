import { ConversationPart, GitBookConversation, Message } from './types';

/**
 * An example function to transform data to the format expected by GitBook Agent.
 * Replace this with your actual data transformation
 * and return the transformed data in the format expected by GitBook Agent.
 */
export const transformDataToGitBook = async (data: any): Promise<GitBookConversation> => {
    // Extract comments from support ticket
    const comments = data.comments || [];

    // Transform comments to GitBook conversation parts
    const transformedParts: ConversationPart[] = comments.map((comment: any) => {
        // Map author type to GitBook role
        // customer → user, agent → team-member
        let role: 'assistant' | 'user' | 'team-member' = 'assistant';
        if (comment.author?.type === 'customer') {
            role = 'user';
        } else if (comment.author?.type === 'agent') {
            role = 'team-member';
        }

        // Create message object expected by GitBook Agent
        const message: Message = {
            type: 'message',
            role,
            body: comment.content || comment.body || '',
        };

        return { message };
    });

    // Create conversation object expected by GitBook Agent
    const conversation: GitBookConversation = {
        id: `conv-${Date.now()}`,
        parts: transformedParts,
    };

    return conversation;
};
