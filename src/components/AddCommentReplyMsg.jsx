import { useContext } from "react";
import { CommentReplyContext } from "../contexts/CommentReplyContext";

const AddCommentReplyMsg = () => {
  const {
    comments,
    reply,
    isReplying,
    setIsReplying,
    replyState,
    setReplyState,
    handleReply,
  } = useContext(CommentReplyContext);
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className="flex flex-col items-center mt-10" key={comment.id}>
            {comment.msg}
            {reply.map((rep) => {
              return (
                rep.comId == comment.id && (
                  <ul className="list-disc" key={rep.id}>
                    <li>{rep.msg}</li>
                  </ul>
                )
              );
            })}
            {isReplying != comment.id ? (
              <button onClick={() => setIsReplying(comment.id)}>Reply</button>
            ) : (
              <div>
                <input
                  onChange={(e) => setReplyState(e.target.value)}
                  type="text"
                  value={replyState}
                  placeholder="Write reply..."
                  className="border-2 border-black"
                />
                <button
                  onClick={() => handleReply(comment.id)}
                  className="ml-3 bg-green-400 px-2 py-1"
                >
                  Add Reply
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AddCommentReplyMsg;
