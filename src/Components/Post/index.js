import React, { useState, useEffect } from 'react';
import './post.css';
import {
  faShare,
  faComment,
  faThumbsUp,
  faHeart,
  faGrinSquintTears,
  faSurprise,
  faAngry,
  faFrown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from './Comment';
import moment from 'moment';
import convertToPost from '../../Functions/convertToPost';
import makeTx from '../../Functions/makeTx';
import getCommentReaction from '../../API/getCommentReaction';
import { withRouter } from 'react-router-dom';

const Post = props => {
  const POST = props.post;
  let connection = props.connection
  let [showComment, setShowComment] = useState(false);
  let [post, setPost] = useState({});
  let [hasInteraction, setHasInterraction] = useState(false);
  const defaultInter = { icon: faThumbsUp, text: 'Thích', class: '', index: 0 };
  let [interaction, setInteraction] = useState(defaultInter);
  let [reactions, setReactions] = useState([]);
  let [comments, setComments] = useState([]);


  connection.onopen = function () {
    console.log('connect')
  }
  connection.onerror = function (error) {
    // an error occurred when sending/receiving data
  };

  connection.onmessage = async (message) => {
    try {
      var json = JSON.parse(message.data);
     
      if (json.Operation === 'interact' && json.Params.object === POST.Hash)
        return getCommentReaction(POST.Hash).then(res => {
          setComments(res.data.comments);
          setReactions(res.data.reactions);
          let result = res.data.reactions.find(e => e._id === props.PublicKey);

          if (result) {
            let newInter;
            switch (result.Reaction) {
              case 1:
                newInter = createInteraction(faThumbsUp, 'Thích', 'like', 1);
                break;
              case 2:
                newInter = createInteraction(faHeart, 'Yêu thích', 'love', 2);
                break;
              case 3:
                newInter = createInteraction(faGrinSquintTears, 'Haha', 'haha', 3);
                break;
              case 4:
                newInter = createInteraction(faSurprise, 'Wow', 'haha', 4);
                break;
              case 5:
                newInter = createInteraction(faFrown, 'Buồn', 'haha', 5);
                break;
              case 6:
                newInter = createInteraction(faAngry, 'Giận dữ', 'angry', 6);
                break;
              default:
                newInter = defaultInter;
            }
            setInteraction(newInter);
            setHasInterraction(true);
          }
        });

    } catch (e) {
      console.log('This doesn\'t look like a valid JSON: ',
        message.data);
      return;
    }
  };
  useEffect(
    () => {
      convertToPost(props.post).then(_post => setPost(_post));
      getCommentReaction(props.post.Hash).then(res => {
        setComments(res.data.comments);
        setReactions(res.data.reactions);
        let result = res.data.reactions.find(e => e._id === props.PublicKey);

        if (result) {
          let newInter;
          switch (result.Reaction) {
            case 1:
              newInter = createInteraction(faThumbsUp, 'Thích', 'like', 1);
              break;
            case 2:
              newInter = createInteraction(faHeart, 'Yêu thích', 'love', 2);
              break;
            case 3:
              newInter = createInteraction(faGrinSquintTears, 'Haha', 'haha', 3);
              break;
            case 4:
              newInter = createInteraction(faSurprise, 'Wow', 'haha', 4);
              break;
            case 5:
              newInter = createInteraction(faFrown, 'Buồn', 'haha', 5);
              break;
            case 6:
              newInter = createInteraction(faAngry, 'Giận dữ', 'angry', 6);
              break;
            default:
              newInter = defaultInter;
          }
          setInteraction(newInter);
          setHasInterraction(true);
        }
      });
    }, [props.post.Hash]
  );

  function createInteraction(_icon, _text, _class, _index) {
    return { icon: _icon, text: _text, class: _class, index: _index };
  }

  function hadleInteractionClick(index) {
    if (hasInteraction && index === interaction.index) {
      setHasInterraction(false);
      setInteraction(defaultInter);
      const Params = {
        object: props.post.Hash,
        content: {
          type: 2,
          reaction: 0,
        },
      };
      makeTx(props.PublicKey, 'interact', Params, props.SecretKey);
      return;
    }
    let newInter;
    switch (index) {
      case 1:
        newInter = createInteraction(faThumbsUp, 'Thích', 'like', 1);
        break;
      case 2:
        newInter = createInteraction(faHeart, 'Yêu thích', 'love', 2);
        break;
      case 3:
        newInter = createInteraction(faGrinSquintTears, 'Haha', 'haha', 3);
        break;
      case 4:
        newInter = createInteraction(faSurprise, 'Wow', 'haha', 4);
        break;
      case 5:
        newInter = createInteraction(faFrown, 'Buồn', 'haha', 5);
        break;
      case 6:
        newInter = createInteraction(faAngry, 'Giận dữ', 'angry', 6);
        break;
      default:
        newInter = defaultInter;
    }
    setInteraction(newInter);
    setHasInterraction(true);
    const Params = {
      object: props.post.Hash,
      content: {
        type: 2,
        reaction: newInter.index,
      },
    };
    makeTx(props.PublicKey, 'interact', Params, props.SecretKey);
  }
  return (
    <React.Fragment>
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
              onClick={() =>
                props.history.push(`/profile/${props.post.Address}`)}
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
          <div className="footer">
            <div className="footer-item postStat">
              <div className={`item-interaction ${interaction.class}`}>
                <FontAwesomeIcon icon={interaction.icon} /> {interaction.text} ({reactions ? reactions.filter(e => e.Reaction !== 0).length : 0})
              </div>
              <div className="popup-content">
                <div
                  onClick={() => hadleInteractionClick(1)}
                  className="interaction like"
                >
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <span className="tooltiptext">Thích</span>
                </div>
                <div
                  onClick={() => hadleInteractionClick(2)}
                  className="interaction love"
                >
                  <FontAwesomeIcon icon={faHeart} />
                  <span className="tooltiptext">Yêu thích</span>
                </div>
                <div
                  onClick={() => hadleInteractionClick(3)}
                  className="interaction haha"
                >
                  <FontAwesomeIcon icon={faGrinSquintTears} />
                  <span className="tooltiptext">Haha</span>
                </div>
                <div
                  onClick={() => hadleInteractionClick(4)}
                  className="interaction haha"
                >
                  <FontAwesomeIcon icon={faSurprise} />
                  <span className="tooltiptext">Wow</span>
                </div>
                <div
                  onClick={() => hadleInteractionClick(5)}
                  className="interaction haha"
                >
                  <FontAwesomeIcon icon={faFrown} />
                  <span className="tooltiptext">Buồn</span>
                </div>
                <div
                  onClick={() => hadleInteractionClick(6)}
                  className="interaction angry"
                >
                  <FontAwesomeIcon icon={faAngry} />
                  <span className="tooltiptext">Phẫn nộ</span>
                </div>
              </div>
            </div>
            <div
              className="footer-item"
              onClick={() => setShowComment(!showComment)}
            >
              <FontAwesomeIcon icon={faComment} />
              <div className="footer-item-content">Bình luận ({comments.length})</div>
            </div>
            <div className="footer-item">
              <FontAwesomeIcon icon={faShare} />
              <div className="footer-item-content">Chia sẻ</div>
            </div>
          </div>
        </div>
      </div>
      {showComment &&
        <Comment
          hash={POST.Hash}
          comments={comments}
          reactions={reactions}
          close={setShowComment}
        />}
    </React.Fragment>
  );
};

export default withRouter(Post);