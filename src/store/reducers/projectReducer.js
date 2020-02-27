const initState = {
  projects: [
    {id: '1', title: 'project 1', content: 'adhbasgbnfg'},
    {id: '2', title: 'project 2', content: 'adhbasgbnfg'},
    {id: '3', title: 'project 3', content: 'adhbasgbnfg'}
  ]
}
const projectReducer = (state = initState, action) => {
  if (action.type === 'CREATE_PROJECT'){
    let newProjectList = [...state.projects, action.project];
    console.log(action.project);
    return state
  }else if(action.type === 'CREATE_PROJECT_ERROR'){
    console.log(action.err);
    return state
  }else{
    return state;
  }
}

export default projectReducer;