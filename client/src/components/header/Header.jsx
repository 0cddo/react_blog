import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
        <img
          className="headerImg"
          src={require("./headerImage.jpg")}
          alt="header"
        />
      </div>
    </div>
  );
}
