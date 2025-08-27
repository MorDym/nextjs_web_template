import Hero from "./components/Hero";
import News from "./components/News";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

export default function Home() {
  return (
          <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Hero />
      <div className="flex flex-col items-center">
        <h2>
          Aktuality
        </h2>
        <News />
        <Posts />
        <PostForm />
      </div>
    </div>
  );
}
