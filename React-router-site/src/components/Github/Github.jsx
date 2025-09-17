
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const { user, repos, contributionsThisYear, totalContributions } = useLoaderData();
    return (
        <div className="text-center">
            <div className="bg-gray-700 rounded-lg p-8 text-white max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Github Profile</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-6">
                    <img src={user.avatar_url} alt="profile" className="w-40 h-40 rounded-full border-4 border-white shadow-lg" />
                    <div className="flex-1 text-left">
                        <h3 className="text-2xl font-semibold">{user.name} <span className="text-base text-gray-300">(@{user.login})</span></h3>
                        <p className="text-gray-300 mb-2">{user.bio}</p>
                        <p className="mb-1"><span className="font-semibold">Location:</span> {user.location || 'N/A'}</p>
                        <p className="mb-1"><span className="font-semibold">Company:</span> {user.company || 'N/A'}</p>
                        <p className="mb-1"><span className="font-semibold">Blog:</span> {user.blog ? <a href={user.blog} className="underline text-blue-300" target="_blank" rel="noopener noreferrer">{user.blog}</a> : 'N/A'}</p>
                        <p className="mb-1"><span className="font-semibold">Followers:</span> {user.followers} &nbsp; <span className="font-semibold">Following:</span> {user.following}</p>
                        <p className="mb-1"><span className="font-semibold">Public Repos:</span> {user.public_repos}</p>
                        <p className="mb-1"><span className="font-semibold">Total Contributions (all time):</span> {totalContributions ?? 'N/A'}</p>
                        <p className="mb-1"><span className="font-semibold">Contributions (this year):</span> {contributionsThisYear ?? 'N/A'}</p>
                    </div>
                </div>
                <h4 className="text-xl font-bold mb-2 mt-6">Top 5 Public Repositories</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {repos.slice(0, 5).map(repo => (
                        <div key={repo.id} className="bg-gray-800 rounded p-4 text-left">
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-300 hover:underline">{repo.name}</a>
                            <p className="text-gray-300 text-sm mb-1">{repo.description || 'No description'}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {repo.language && <span className="bg-blue-900 px-2 py-1 rounded text-xs">{repo.language}</span>}
                                {repo.topics && repo.topics.map(topic => (
                                    <span key={topic} className="bg-gray-600 px-2 py-1 rounded text-xs">{topic}</span>
                                ))}
                            </div>
                            <p className="text-xs mt-2">⭐ {repo.stargazers_count} | Forks: {repo.forks_count}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Github;

export const githubloaderinfo = async () => {
    // --- Personal Access Token from environment variables ---
    // Create a .env.local file in the project root and add: VITE_GITHUB_TOKEN=your_token_here
    // Go to https://github.com/settings/tokens and generate a token with 'read:user' and 'repo' scopes
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; // Token from environment variables
    
    const headers = {};
    if (GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    }
    
    // Fetch user profile
    const userRes = await fetch('https://api.github.com/users/YUVRAJRANA10', { headers });
    const user = await userRes.json();
    // Fetch repos (sorted by stargazers)
    const reposRes = await fetch('https://api.github.com/users/YUVRAJRANA10/repos?per_page=100&sort=updated', { headers });
    let repos = await reposRes.json();
    repos = Array.isArray(repos) ? repos.sort((a, b) => b.stargazers_count - a.stargazers_count) : [];

    // Fetch contributions (this year and all-time) using GitHub GraphQL API
    let contributionsThisYear = null;
    let totalContributions = null;
    
    if (GITHUB_TOKEN) {
        try {
            const now = new Date();
            const year = now.getFullYear();
            const from = `${year}-01-01T00:00:00Z`;
            const to = now.toISOString();
            const query = {
                query: `query {\n  user(login: \"YUVRAJRANA10\") {\n    contributionsThisYear: contributionsCollection(from: \"${from}\", to: \"${to}\") {\n      contributionCalendar {\n        totalContributions\n      }\n    }\n    contributionsAll: contributionsCollection {\n      contributionCalendar {\n        totalContributions\n      }\n    }\n  }\n}`
            };
            const graphRes = await fetch('https://api.github.com/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GITHUB_TOKEN}`
                },
                body: JSON.stringify(query)
            });
            const graphData = await graphRes.json();
            contributionsThisYear = graphData?.data?.user?.contributionsThisYear?.contributionCalendar?.totalContributions ?? null;
            totalContributions = graphData?.data?.user?.contributionsAll?.contributionCalendar?.totalContributions ?? null;
        } catch (e) {
            contributionsThisYear = null;
            totalContributions = null;
        }
    }

    return {
        user,
        repos,
        contributionsThisYear,
        totalContributions
    };
};
