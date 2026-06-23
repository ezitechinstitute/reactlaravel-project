import RawHtml from "../components/RawHtml";
import html from "../content/BlogDetails.html?raw";

export default function BlogDetails() {
  return <RawHtml html={html} />;
}
