import { Prisma } from "@prisma/client";

export function getUserDataSelect(loginUserId: string) {
  return {
    id: true,
    username: true,
    displayName: true,
    avatarUrl: true,
    follower: {
      where: {
        followerId: loginUserId,
      },
      select: {
        followerId: true,
      },
    },
    _count: {
      select: {
        follower: true,
      },
    },
  } satisfies Prisma.UserSelect;
}

export function getPostDataInclude(loginUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loginUserId),
    },
  } satisfies Prisma.PostInclude;
}

export type PostData = Prisma.PostGetPayload<{
  include: ReturnType<typeof getPostDataInclude>;
}>;

export interface PostsPage {
  posts: PostData[];
  nextCursor: string | null;
}

export interface FollowerInfo {
  followers: number;
  isFollowedByUser: boolean;
}
