# taxi-sharing-server
# Kakao-Firebase-Custom-Token-Creator

Do the following in your client app:

1. HTTP method = POST
2. Set the "Content-Type", "Accept" in the HTTPHeaderField of your URL Request
3. Use Kakao SDK to get the user's app-specific id key
4. Convert ["userID": "AndroidKakao" + 사용자 고유 아이디] into a JSON object
5. Send the URL Request to https://<yourprojectname>firebaseapp.com/verifyToken
6. Parse the JSON object from the server's response into a dictionary
7. Get your Firebase Custom Token by indexing the dictionary from 6. with the key "firebase_token"
  
With the given Custom Token, implement Custom Authentication by following steps from Firebase Official Document:
1. Android: https://firebase.google.com/docs/auth/android/custom-auth
2. iOS: https://firebase.google.com/docs/auth/ios/custom-auth
