import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first", likesCount: 11},
        {id: 3, message: "Русские слова", likesCount: 423},
        {id: 4, message: "Dada", likesCount: 21},
    ],
    profile: null,
    status: ""
};

test("new post should be added", () => {

    let action  = addPostActionCreator("New Text");

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
})

test("new name should be added", () => {

    let action  = addPostActionCreator("New Text");

    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("New Text")
})

test("delete message test", () => {

    let action  = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3)
})

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {

    let action  = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4)
})


