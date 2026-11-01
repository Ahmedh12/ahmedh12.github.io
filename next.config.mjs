/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = process.env.REPO_NAME || '';
// User/organization site (repo named <user>.github.io) needs no base path.
const isUserSite = repoName.endsWith('.github.io');
const basePath = isGitHubPages && repoName && !isUserSite ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
};
export default nextConfig;