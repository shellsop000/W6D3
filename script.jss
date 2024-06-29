$(document).ready(function(){
    
    addComment("Original Poster", "Trying to decide a career path? Programming is the move. Change my mind.", true);

    function addComment(author, text, fixed){
        let commentHtml = 
        <div class ="comment">
        <p><strong>${author}</strong>: ${text}</p>
        <button class ="editBtn">Edit</button>
        <button class ="deleteBtn">Delete</button>
        </div>
        `;
        if(fixed){
            $('#commentsContainer').prepend(commentHtml);
        }
        else{
            $('#commentsContainer').append(commentHtml);
        }
    }

    $('#postComment').click(function(){
        let commentText = $('#commentText').val();
        if (commentText.trim() !== ''){
            addComment("User", commentText, false);
            $('#commentText').val('');
        }
    });

    $('#commentsContainer').on('click', '.editBtn', function(){
        let $comment = $(this).closest('.comment');
        let $commentText = $comment.find('p');
        let currentText = $commentText.text().replace($comment.find('strong').text() + ': ', '');
        let newText = prompt("Edit your comment:", currentText);
        if (newText !== null && newText.trim() !== ''){
            $commentText.html(`<strong>${$comment.find('strong').text()}</strong>: ${newText}`);
        }
    });

    $('#commentsContainer).on('click', 'deleteBtn', function(){
        $(this).closest('.comment').remove();
    });
});