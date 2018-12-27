import React, {useState, useEffect} from 'react'
import moment from 'moment'
import convertToPost from '../../Functions/convertToPost'
const ListItem = ({Post}) => {
    let [post, setPost] = useState({});
    useEffect(
        () => {
          convertToPost(Post).then(_post => setPost(_post));
        }, [Post]
    )

    return(
        <div className="post">
        <div>
          <img
            className="post-avatar"
            src={
              post.ownerImage
                ? `data:image/jpeg;base64,${post.ownerImage}`
                : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'
            }
            alt="avatar"
          />
        </div>
        <div className="postContent">
          <div className="header">
            <div
              className={
                post.owner && post.owner.length > 20
                  ? 'cut-word postOwner'
                  : 'postOWner'
              }
            >
              {post.owner}
            </div>
            <div className="postAt">
              {moment(post.time).format('DD/MM/YYYY HH:mm:ss')}
            </div>
          </div>
          <div className="body">
            <p className="content">{post.content}</p>
            {post.image && <img src={`data:image/jpeg;base64,${post.image}`} />}
          </div>
        </div>
      </div>
    )
    
}

export default ListItem;