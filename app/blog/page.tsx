import getPostsMetadata from '../components/getPostMetadata';
import PostPreview from '../components/PostPreveiw';

const BlogPage = () => {
    const postMetadata = getPostsMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {postPreviews}
            </div>
        </div>
    );
}

export default BlogPage;
