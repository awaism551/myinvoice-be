ROADMAP

firestore db: done
crud implementation: done
firebase auth
firebase storage
firebase hosting
fcm
push notifications

backup of firebase.json
add below lines to firebase.json file if you want to access local firebase emulator firestore
"firestore": {
"rules": "firestore.rules",
"indexes": "firestore.indexes.json"
}
If you make some changes in code, don't forget to reload the server because currently firebase functions don't support autoreloading
so
quit the server
close the terminal
open new terminal tab
cd nest-server
npm run start
