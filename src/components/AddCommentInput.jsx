import { useContext } from "react";
import { CommentReplyContext } from "../contexts/CommentReplyContext";

const AddCommentInput = () => {
  const { commentState, setCommentState, handleComment } = useContext(CommentReplyContext);
  return (
    <div>
      <div className="flex justify-center mt-8">
        <input
          onChange={(e) => setCommentState(e.target.value)}
          type="text"
          value={commentState}
          className="border-2 border-black w-1/3"
          placeholder="Write Comment Here..."
        />
        <button
          onClick={handleComment}
          className="ml-3 bg-yellow-400 px-2 py-1"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default AddCommentInput;
