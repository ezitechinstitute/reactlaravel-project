import RawHtml from "../components/RawHtml";
import html from "../content/Home.html?raw";

export default function Home() {
  return <RawHtml html={html} />;
}
