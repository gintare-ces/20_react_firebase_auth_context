rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
  
  function validatePost() {
    return request.resource.data.keys().hasAll(['title', 'body', 'author', 'tags', 'date', 'userUid']) && 
      request.resource.data.title is string &&
      request.resource.data.title.size() >= 5 && // Minimum length of 5 characters
      request.resource.data.body is string &&
      request.resource.data.author is string &&
      request.resource.data.tags is string &&
      // request.resource.data.date is string &&
      // request.resource.data.date.size() >= 5 &&
      request.resource.data.userUid is string &&
      request.resource.data.userUid == request.auth.uid;
  }
				


    // match /{document=**} {
    //   allow read, write: if request.auth != null;
    // }
    match /posts/{postUid} {
      allow read: if request.auth != null;
      allow write: if validatePost()
      // allow write: if request.auth != null;
    }
    match /posts/{postUid}/comments/{commentUid} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
      // allow write: if request.auth != null;
    }
    
    
  }
}