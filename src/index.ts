import axios, { AxiosResponse } from 'axios';
import express, { Request, Response } from 'express';

interface GithubUser {
    name: string;
    // Add other required fields if needed.
}

const GITHUB_API_URL = 'https://api.github.com/users/AndrianBalanescu';

const app = express();
const port: number = parseInt(process.env.PORT || '8000', 10);

// Fetch Github user data
const fetchGithubUserData = async (): Promise<GithubUser | null> => {
    try {
        const response: AxiosResponse<GithubUser> = await axios.get(GITHUB_API_URL);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch Github user data:', error);
        return null;
    }
};

let cachedUserData: GithubUser | null = null;

// Initial data fetch and caching
fetchGithubUserData().then(data => {
    if (data) {
        cachedUserData = data;
    }
});

app.get('/', (req: Request, res: Response) => {
    if (!cachedUserData) {
        return res.status(500).json({ error: 'Failed to fetch Github user data.' });
    }
    return res.json(cachedUserData);
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
