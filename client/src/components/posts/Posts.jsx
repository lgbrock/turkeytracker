import Post from '../post/Post';
import './posts.css';

const Posts = ({ posts }) => {
	return (
		<div className='posts' key={posts.id}>
			{/* {posts.map((p) => (
				<Post post={p} />
			))} */}
		</div>
	);
};

export default Posts;
