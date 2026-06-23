import RawHtml from "../components/RawHtml";
import html from "../content/NotFound.html?raw";

export default function NotFound() {
  return <RawHtml html={html} />;
}
