import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from '../components/postMetadata';

const getPostsMetadata = (): PostMetadata[] => {
    const folder = 'posts';
    const fileNames = fs.readdirSync(folder);
    const markdownFiles = fileNames.filter((fileName) => fileName.endsWith('.md'));

    const posts = markdownFiles.map((fileName) => {
        const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf8');
        const matterResult = matter(fileContent);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace('.md', ''),
        };
    });
    return posts;
};

export default getPostsMetadata;