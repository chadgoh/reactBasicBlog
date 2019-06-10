const initState = {
    posts: [
        {id: '1', title: 'Squirtle laid an egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam odio, modi veniam aliquid ea vitae! Et vel repellendus aperiam autem laborum voluptatem? Delectus quasi, saepe ab assumenda rerum quidem.'},
        {id: '2', title: 'Charmander laid an egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam odio, modi veniam aliquid ea vitae! Et vel repellendus aperiam autem laborum voluptatem? Delectus quasi, saepe ab assumenda rerum quidem.'},
        {id: '3', title: 'Bulbasaur laid an egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam odio, modi veniam aliquid ea vitae! Et vel repellendus aperiam autem laborum voluptatem? Delectus quasi, saepe ab assumenda rerum quidem.'}
    ]
}

const rootReducer = (state= initState, action) => {
    if (action.type="DELETE_POST"){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;
