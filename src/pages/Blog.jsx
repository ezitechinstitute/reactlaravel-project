import RawHtml from "../components/RawHtml";
import html from "../content/Blog.html?raw";

export default function Blog() {
  return <RawHtml html={html} />;
}
