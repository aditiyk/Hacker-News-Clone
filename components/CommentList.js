
import Comment from "./Comment";
import PropTypes from "prop-types";

const CommentList = ({ comments }) => (
  <>
    {comments.map((comment) => (
      <Comment  comment={_highlightResult} />
    ))}
  </>
);

CommentList.propTypes = {
  comments: PropTypes.array,
};

export default CommentList;