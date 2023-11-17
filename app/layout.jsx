import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

// HEAD dari HTML
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

// children disini akan mengambil view dari page.jsx
const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;