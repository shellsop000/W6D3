$(document).ready(function() {

    // Function to add a new comment
    function addComment(displayName, text) {
      let commentHtml = `
        <div class="comment">
          <p><strong>${displayName}</strong>: ${text}</p>
          <button class="editBtn">Edit</button>
          <button class="deleteBtn">Delete</button>
        </div>
      `;
      $('#commentsContainer').prepend(commentHtml);
    }
  
    // Event listener for posting a comment
    $('#postComment').click(function() {
      let displayName = $('#displayName').val().trim();
      let commentText = $('#commentText').val().trim();
      if (displayName === '') {
        displayName = 'User'; // Default display name if empty
      }
      if (commentText !== '') {
        addComment(displayName, commentText);
        $('#displayName').val(''); // Clear display name input
        $('#commentText').val(''); // Clear comment textarea
        $('#commentsContainer').show(); // Show comments container if hidden
      }
    });
  
    // Event delegation for edit button
    $('#commentsContainer').on('click', '.editBtn', function() {
      let $comment = $(this).closest('.comment');
      let $commentText = $comment.find('p');
      let currentText = $commentText.text().replace($comment.find('strong').text() + ': ', '');
      let newText = prompt("Edit your comment:", currentText);
      if (newText !== null && newText.trim() !== '') {
        $commentText.html(`<strong>${$comment.find('strong').text()}</strong>: ${newText}`);
      }
    });
  
    // Event delegation for delete button
    $('#commentsContainer').on('click', '.deleteBtn', function() {
      $(this).closest('.comment').remove();
    });
  
  });
  