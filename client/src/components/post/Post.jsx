import "./post.css"

const Post = () => {
    return (
        <div className="post">
            <img className="postImg" src="https://media.npr.org/assets/img/2021/04/27/prancer_wide-db59609b5bd96c9e56e4dfe32d198461197880c2.jpg?s=1400" alt="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Name</span>
                    <span className="postCat">Fav Treat</span>
                </div>
                <span className="postTitle">
                    lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 Hour Ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perspiciatis laudantium saepe molestias similique velit culpa dolore cumque rerum accusantium aliquid adipisci repudiandae magni, molestiae quam totam quisquam aspernatur amet. orem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perspiciatis laudantium saepe molestias similique velit culpa dolore cumque rerum accusantium aliquid adipisci repudiandae magni, molestiae quam totam quisquam aspernatur amet.
            </p>
        </div>
    )
}

export default Post
