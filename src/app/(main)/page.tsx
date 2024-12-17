import PostEditor from "@/components/posts/editor/PostEditor";
import Post from "@/components/posts/Post";
import prisma from "@/lib/prisma";
import { postDataInclude } from "@/lib/type";

export default async function Home() {
  const post = await prisma.post.findMany({
    include: postDataInclude,
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="w-full">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        {post.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
