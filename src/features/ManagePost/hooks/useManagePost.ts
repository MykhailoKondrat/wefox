import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { toggleManagePost as toggleManagePostAction } from "../managePostSlice";

export type ToggleManagePost = (options?: {
  postIdToUpdate: number;
}) => void;

interface IManagePost {
  isManagePostOpen: boolean;
  handleToggleManagePost: ToggleManagePost;
  postIdToUpdate: number | null
}
type UseManagePost = () => IManagePost;

export const useManagePost: UseManagePost = () => {
  const isManagePostOpen = useAppSelector(
    (state) => state.managePost.isManagePostOpen
  );
  const postIdToUpdate = useAppSelector(  ({managePost}) => managePost.postIdToUpdate)
  const dispatch = useAppDispatch();

  const handleToggleManagePost:ToggleManagePost = (options) => {
    dispatch(toggleManagePostAction(options?.postIdToUpdate));
  };

  return { isManagePostOpen, handleToggleManagePost,postIdToUpdate } as const;
};
