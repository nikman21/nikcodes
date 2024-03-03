import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostsMetadata from '../../components/getPostMetadata';

const getPostContent = (slug: string) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostsMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div className="bg-gray-100 min-h-screen pt-10 pb-20">
            <div className="max-w-4xl mx-auto">
                <div className="my-12 text-center">
                    <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
                    <p className="text-slate-400 mt-2">{post.data.date}</p>
                </div>

                <div className="p-5 bg-white rounded-lg shadow-md">
                    <div className="prose prose-lg mx-auto">
                        <article>
                            <Markdown>{post.content}</Markdown>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default PostPage;
