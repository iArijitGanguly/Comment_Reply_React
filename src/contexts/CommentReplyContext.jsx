import { createContext, useState } from "react";

export const CommentReplyContext = createContext(null);

// eslint-disable-next-line react/prop-types
const CommentReplyProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  const [reply, setReply] = useState([]);

  const [commentState, setCommentState] = useState("");
  const [replyState, setReplyState] = useState("");
  const [isReplying, setIsReplying] = useState(null);
  const handleComment = () => {
    setComments([...comments, { id: comments.length + 1, msg: commentState }]);
    setCommentState('');
  };

  const handleReply = (comId) => {
    setReply([
      ...reply,
      { id: reply.length + 1, comId: comId, msg: replyState },
    ]);
    setReplyState('');
    setIsReplying(false);
  };
  return (
    <CommentReplyContext.Provider
      value={{
        comments,
        setComments,
        reply,
        setReply,
        commentState,
        setCommentState,
        replyState,
        setReplyState,
        isReplying,
        setIsReplying,
        handleComment,
        handleReply
      }}
    >
      {children}
    </CommentReplyContext.Provider>
  );
};

export default CommentReplyProvider;
