# API Routes and Expected Inputs

## User Routes

```bash

    BACKEND IS NOT READY YET PEOPLE

```

- **Login User:**

  - Method: `POST`
  - Route: `/api/login`
  - Expected Input: `{ "email": "user@example.com", "password": "password123" }`

- **Signup User:**

  - Method: `POST`
  - Route: `/api/signup`
  - Expected Input: `{ "email": "newuser@example.com", "password": "newpassword", "user_name": "New User" }`

- **Get User by ID:**

  - Method: `GET`
  - Route: `/api/user/:userID`
  - Expected Input: None (UserID in the URL)

- **Delete User by ID:**
  - Method: `DELETE`
  - Route: `/api/user/:userID`
  - Expected Input: None (UserID in the URL)

## Room Routes

- **Create Room:**

  - Method: `POST`
  - Route: `/api/room`
  - Expected Input: `{ "room_name": "Room Name", "user_id": "userID" }`

- **Get Room by ID:**

  - Method: `GET`
  - Route: `/api/room/:roomID`
  - Expected Input: None (RoomID in the URL)

- **Update Room:**

  - Method: `PUT`
  - Route: `/api/room/:roomID`
  - Expected Input: `{ "updatedName": "New Room Name" }` (RoomID in the URL)

- **Delete Room by ID:**
  - Method: `DELETE`
  - Route: `/api/room/:roomID`
  - Expected Input: None (RoomID in the URL)

## Post Routes

- **Create Post:**

  - Method: `POST`
  - Route: `/api/post`
  - Expected Input: `{ "user_id": "userID", "post_content": "Post Content", "room_id": "roomID" }`

- **Get Post by ID:**

  - Method: `GET`
  - Route: `/api/post/:postID`
  - Expected Input: None (PostID in the URL)

- **Update Post:**

  - Method: `PUT`
  - Route: `/api/post/:postID`
  - Expected Input: `{ "updatedContent": "Updated Post Content" }` (PostID in the URL)

- **Delete Post by ID:**
  - Method: `DELETE`
  - Route: `/api/post/:postID`
  - Expected Input: None (PostID in the URL)

## Comment Routes

- **Create Comment:**

  - Method: `POST`
  - Route: `/api/comment`
  - Expected Input: `{ "user_id": "userID", "comment_content": "Comment Content", "post_id": "postID" }`

- **Get Comment by ID:**

  - Method: `GET`
  - Route: `/api/comment/:commentID`
  - Expected Input: None (CommentID in the URL)

- **Update Comment:**

  - Method: `PUT`
  - Route: `/api/comment/:commentID`
  - Expected Input: `{ "updatedContent": "Updated Comment Content" }` (CommentID in the URL)

- **Delete Comment by ID:**
  - Method: `DELETE`
  - Route: `/api/comment/:commentID`
  - Expected Input: None (CommentID in the URL)