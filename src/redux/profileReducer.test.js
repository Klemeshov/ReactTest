import React from "react";
import profileReducer, {deletePost} from "./profileReducer";

let State = {
    profileInfo: null,
    posts: [{
        id:2,
        message:'sdfjsdlkf'
    },{
        id: 3,
        message: 'sdfo'
    }]
};

it ("after deleting length of massive should be incremented", ()=>{
    //test data
    let action = deletePost(2);
    //action
    let newState = profileReducer(State, action);
    //expectation
    expect(newState.posts.length).toBe(1);

});