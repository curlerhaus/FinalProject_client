import "./posts.css";
import Post from "../post/Post";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.length >= 1 &&
        posts.map((p) => (
          <div className="singlePost">
            <Post post={p} />
          </div>
        ))}
    </div>
  );
}
