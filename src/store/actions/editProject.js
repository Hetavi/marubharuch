export const editProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log('Edit project action')
    console.log(project.docid)
    firestore.collection('ganesh').doc(project.docid).set({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId
    
    }, { merge: true }).then(() => {
      dispatch({ type: 'edit_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'edit_PROJECT_ERROR' }, err);
    });
  }
};
