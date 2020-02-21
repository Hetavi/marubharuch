    (1) create new gmail
    (2) create new account with above gmail on firebase
    (3) create new project on firebase and then add an app by clicking on '</>' icon
    (4) devlop>athentication>sign-in method> enable google
    (5) databas firestore>start collection
                add three collection
                user
                admin
                notice
     (6)database rules as follows
     ----
     rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    match /projects/{authorFirstName} {
 allow write: if exists(/databases/$(database)/documents/admin/$(request.auth.uid));
			allow read:if true;    
    }
    match/users/{firstname}{
    allow write : if true;
    allow read:if true;
    }
    match/admin/{userid}{
     allow write: if request.auth.uid == "3YudleWleYhzqMPMMFqSC9z7wnR2";
     allow read:if true;
    }
    
    
  }
}
     
     ----
    now create react app as follows:
    1   open command prompt
    2   node -v (to check node.js is installed or not- if not then install Node.js )
    3   npm install -g firebase-tools  (to install firebase tools)
    
    4   npx  create-react-app [your app name]  (npx used for latest version)
            - cd [your app name] then npm start and check everything is ok
    5   firebase logout (To ensure not using other acount)
    6   firebase login (select your gmail )
    7   firebase init 
            -Select to set up Hosting. (for seletion use space bar )
            -Select a Firebase project which is already created by you
            -Specify 'dist' directory to use as your public root directory
            - give appropriate answer asked by system
    8  npm run build (this will build app in build folder)
        now move all files from build folder to dist folder
    8   firebase deploy (now system will upload required files)
     congratulations you yor web app is ready. browse it
     
    IF YO WANT TO USE THIS CODE THEN FOLLOWS THIS STEP
    1   CLONE THIS REPO..
    2   AFTER EXTRACT OPEN THAT FOLDER(CHECK PACKAGE.JSON IS THER)
    3   NPM INSTALL
    4   COPY YOUR  Firebase SDK snippet INTO fbconfig.js
    5   npm run
    then follow step 5 to 8 for hosting yor web app
