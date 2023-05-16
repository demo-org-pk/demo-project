import React, { useState } from 'react';

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const [submittedComment, setSubmittedComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Fix for security vulnerability: sanitizing user input to prevent XSS attacks
    const sanitizedComment = comment.replace(/(<([^>]+)>)/gi, "");

    // Simulating server-side processing
    setSubmittedComment(sanitizedComment);
  };

  return (
    <div>
      <h2>Comment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Comment:</label>
          {/* Fix for security vulnerability: setting textarea value to sanitized comment */}
          <textarea value={sanitizedComment} onChange={handleCommentChange}></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submittedComment && (
        <div>
          <h3>Submitted Comment:</h3>
          {/* Fix for security vulnerability: setting submitted comment to sanitized comment */}
          <p>{sanitizedComment}</p>
        </div>
      )}
    </div>
  );
};

export default CommentForm;