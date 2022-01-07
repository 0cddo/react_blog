import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img src={require("./post.jpg")} alt="post" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quam
        tempora, quo assumenda laudantium molestias corporis distinctio? Facere
        ab a aliquid quia quod quae, natus iure consectetur optio cum
        necessitatibus!
      </p>
    </div>
  );
}
