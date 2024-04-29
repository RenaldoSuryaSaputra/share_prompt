// halaman yang akan muncul pada entri point yang 
// nantinya akan dibungkus pada layout childeren
import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
 {/* head_text dari global.css */}
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> AI-Powered Prompts</span>
    </h1>
    <p className="desc text-center">
      Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;
