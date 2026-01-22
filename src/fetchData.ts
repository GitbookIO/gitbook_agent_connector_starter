export const fetchData = async (installation: any) => {
    // Extract developer token for use in API calls (see example below)
    // const developerToken = installation.configuration.developer_token;
    /**
     * Example API endpoint to fetch data
     *
     * Replace this with your actual API endpoint
     * and return the data in JSON format.
     *
     * For now, we are returning sample data.
     *
     * Example:
     * const response = await fetch('https://example.com/api/data', {
     *      headers: {
     *          Authorization: `Bearer ${developerToken}`,
     *      },
     *  });
     *
     * return response.json();
     */

    return {
        ticket_id: 'TKT-12345',
        subject: 'API documentation is out of date',
        status: 'open',
        priority: 'high',
        created_at: '2024-01-15T10:30:00Z',
        updated_at: '2024-01-15T14:22:00Z',
        customer: {
            id: 'CUST-789',
            name: 'John Doe',
            email: 'john.doe@example.com',
        },
        tags: ['documentation', 'api'],
        comments: [
            {
                id: 'CMT-001',
                author: {
                    type: 'customer',
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                },
                created_at: '2024-01-15T10:30:00Z',
                content:
                    "Hi, I found that the API documentation for the authentication endpoint is incorrect. The documentation says to use `POST /api/v1/auth/login` but the actual endpoint is `POST /api/v2/auth/login`. This caused me to waste a lot of time trying to debug why my integration wasn't working.",
            },
            {
                id: 'CMT-002',
                author: {
                    type: 'agent',
                    name: 'Sarah Chen',
                    email: 'sarah.chen@support.example.com',
                },
                created_at: '2024-01-15T11:15:00Z',
                content:
                    'Hello John, thank you for reporting this documentation issue. You are absolutely right - we recently updated our API to version 2, but the documentation was not updated accordingly. I have escalated this to our documentation team and they will update it immediately. In the meantime, please use `/api/v2/auth/login` for authentication.',
            },
            {
                id: 'CMT-003',
                author: {
                    type: 'customer',
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                },
                created_at: '2024-01-15T14:22:00Z',
                content:
                    "Thank you Sarah! I also noticed that the response format example in the docs doesn't match what the API actually returns. The docs show a `status` field but the actual response uses `code`. Can you have them check that as well?",
            },
        ],
    };
};
