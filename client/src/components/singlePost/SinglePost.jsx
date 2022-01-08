import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src={require("../post/post.jpg")}
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>0cddo</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          debitis saepe sunt nostrum dolore ex distinctio fugit officiis ipsum?
          Ex sint illum quam id eos, cumque debitis in ipsam soluta asperiores
          consectetur, voluptatem similique facere, rem fugiat dolorem aperiam
          nisi numquam totam doloribus adipisci. Vitae, alias velit adipisci
          quod, temporibus sunt, neque rem sequi perferendis cupiditate quos
          enim earum. Ab itaque eligendi dolore magni! Magni, soluta assumenda
          architecto esse aliquam placeat et deleniti labore mollitia fugiat
          saepe beatae accusamus cum eveniet dignissimos facere ad, similique
          quaerat dicta minus quidem odit. Optio vel voluptatibus quis non
          reiciendis quas rem, odit doloremque iste et, eligendi itaque
          dignissimos expedita sit laboriosam asperiores veritatis eius
          voluptatem, accusamus ipsum? Perspiciatis quisquam aspernatur
          assumenda, molestias facilis quis nostrum magnam labore non minima
          reiciendis fugit nam debitis error nulla eius porro sed consectetur
          maiores in? Fuga quas temporibus tenetur fugiat ea obcaecati
          consequatur dignissimos odio alias quaerat fugit laboriosam pariatur
          possimus, quod aut vero adipisci repellat nesciunt quam, ex
          necessitatibus a voluptas eos officiis. Mollitia asperiores eveniet,
          sequi officia quisquam sed explicabo deserunt temporibus, incidunt
          tempore ad a tempora minima nesciunt atque veritatis molestias
          reprehenderit ut impedit! Facere saepe aliquam esse omnis voluptates
          eveniet recusandae quisquam laboriosam.
        </p>
      </div>
    </div>
  );
}
