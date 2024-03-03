import Link from 'next/link';
import { PostMetadata } from './postMetadata';

const PostPreview = (props: PostMetadata) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <Link href={`/posts/${props.slug}`} className="text-xl font-semibold hover:text-blue-500 transition-colors duration-300 ease-in-out">
                {props.title}
            </Link>
            <p className="text-gray-500 text-sm">{props.date}</p>
            <p className="mt-2">{props.subtitle}</p>
        </div>
    );
}

export default PostPreview;
