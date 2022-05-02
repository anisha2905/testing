import {
    createPost,
    formatPosts,
    getPosts
} from '../../services/PostsService';
import {
    CONFIRMED_CREATE_POST_ACTION,
   
    CONFIRMED_GET_POSTS
} from './PostTypes';





export function createPostAction(postData, history) {
    return (dispatch, getState) => {
        createPost(postData).then((response) => {
            const singlePost = {
                ...postData,
                id: response.data.name,
            };
            dispatch(confirmedCreatePostAction(singlePost));
            history.push('/posts');
        });
    };
}

export function getPostsAction() {
    return (dispatch, getState) => {
        getPosts().then((response) => {
            let posts = formatPosts(response.data);
            dispatch(confirmedGetPostsAction(posts));
        });
    };
}

export function confirmedCreatePostAction(singlePost) {
    return {
        type: CONFIRMED_CREATE_POST_ACTION,
        payload: singlePost,
    };
}

export function confirmedGetPostsAction(posts) {
    return {
        type: CONFIRMED_GET_POSTS,
        payload: posts,
    };
}


