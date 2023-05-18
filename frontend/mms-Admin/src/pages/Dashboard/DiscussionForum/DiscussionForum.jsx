/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircleAddIcon } from '../../../assets/images';
import DiscussionPost from '../../../components/Dashboard/DiscussionForum/DiscussionPost';
import DiscussionPostLoading from '../../../components/Dashboard/DiscussionForum/DiscussionPostLoading';
import ForumNewTopic from '../../../components/Modals/ForumNewTopic';
import { getPostsFailure,
  getPostsStart,
  getPostsSuccess,
  noPosts } from '../../../redux/features/forumSlice';
import { openModal } from '../../../redux/features/Modals/modalSlice';
import { tasks } from '../../../services/api';

export function DiscussionForum() {
  const { userInfo } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.forum);
  const userToken = userInfo.data.access_token;
  // const { profileId, id } = userInfo.data.user;
  const dispatch = useDispatch();

  const handleNewTopic = () => {
    dispatch(openModal(<ForumNewTopic />));
  };

  useEffect(() => {
    const getPosts = () => {
      dispatch(getPostsStart());
      dispatch(noPosts());
      tasks
        .get('/posts', {
          headers: {
            Authorization: `bearer ${userToken}`,
          },
        })
        .then((res) => {
          const forumPosts = res.data.data.posts;

          dispatch(getPostsSuccess(forumPosts));
        })
        .catch(() => {
          dispatch(getPostsFailure());
          // console.log(err);
        });
    };
    getPosts();
  }, [posts]);

  return (
    <div className="pb-2 h-full mb-[100px]">
      <div className="w-full bg-white top-[80px] mb-[33px]">
        <h2 className="text-[24px] font-[600] text-black1 mb-[20px]">
          Discussion Forum
        </h2>
        <div className="h-[48px] rounded-[5px] border-[1px] border-black9 flex justify-between items-center px-5">
          <p className="text-black5 font-[400] text-[20px]">Add new topic</p>
          {/* add button */}
          <button
            type="button"
            className="hover:scale-90 duration-500"
            onClick={handleNewTopic}
          >
            <CircleAddIcon color="#058B94" />
          </button>
        </div>
      </div>
      {posts.length > 0 ? (
        <div className="h-full max-h-screen overflow-y-auto scroll pr-[10px] pb-[150px]">
          {posts.map((i) => (
            <DiscussionPost post={i} key={i.id} />
          ))}
        </div>
      ) : (
        posts.length === 0 && <NoPosts />
      )}
    </div>
  );
}

export function NoPosts() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="font-[600] text-[18px] text-black3">
        There are no posts yet in the forum
      </h1>
      <p className="mt-4 text-black3 font-[600]">
        Click on the plus icon on the right-hand corner of your page to create a
        new discussion in the forum
      </p>
    </div>
  );
}

export function LoadingPosts() {
  return (
    <div className="h-full overflow-y-auto scroll pr-[10px]">
      {/* checks if the post array is empty and the we are still retrieving posts */}
      <DiscussionPostLoading />
      <DiscussionPostLoading />
      <DiscussionPostLoading />
      <DiscussionPostLoading />
    </div>
  );
}
