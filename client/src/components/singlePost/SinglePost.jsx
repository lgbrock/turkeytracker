import "./singlePost.css"

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
             <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F10%2F13%2Fcorgi-dog-POPDOGNAME1020.jpg" alt="singlePostImg" className="singlePostImg" />
             </div>  
            <h1 className="singlePostTitle">Single post title
                <div className="singlePostEdit">
                    <i className="singlePostIcon fas fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Logan</b> </span>
                <span className="singlePostDate">1 Hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil magnam modi aliquid unde? Nihil eligendi ducimus, beatae eveniet culpa nemo similique consectetur odit voluptatem aliquam earum. Provident consequatur accusamus ab.
                Voluptatibus, voluptatem. Omnis possimus nisi deleniti alias veniam, architecto, voluptas nam necessitatibus officiis qui sed quaerat nemo est fugiat deserunt laudantium corporis distinctio! Odit, deserunt quisquam quaerat nostrum eaque mollitia.</p>
        </div>
    )
}

export default SinglePost
