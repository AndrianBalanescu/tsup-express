

// @ts-nocheck
import { AxiosResponse }  from 'axios';
import axios from 'axios';


export let cachedUserData: GithubUser | null = null;

interface GithubUser {
    name: string;
    // Add other required fields if needed.
}

const GITHUB_API_URL = 'https://api.github.com/users/AndrianBalanescu';

 

// Fetch Github user data
export const githubProfile = async (): Promise<GithubUser | null> => {
    try {
        const response: AxiosResponse<GithubUser> = await axios.get(GITHUB_API_URL);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch Github user data:', error);
        return null;
    }
};



// Initial data fetch and caching
// fetchGithubUserData().then(data => {
//     if (data) {
//         cachedUserData = data;
//     }
// });