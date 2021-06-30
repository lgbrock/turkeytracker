import Post from '../post/Post';
import './posts.css';

const Posts = ({ posts }) => {
	return (
		<div className='posts'>
			<Post />
			<Post />
		</div>
	);
};

export default Posts;

/*
{posts.map((p) => (
				<Post post={p} />
			))}
*/
