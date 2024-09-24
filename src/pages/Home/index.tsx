export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h3>Welcome to home page</h3>
      {/* TODO:Navigate to signin page */}
      <button>SignIn</button>
    </div>
  );
}
// Must display generic content for anonymous users. The content must be dynamic based on the latest data. For instance, you might display snippets and links to the most recent post, review, or member who recently joined
// Must display specific content for the logged in user. The content must be dynamic based on the most recent data entered by the logged in user. For instance, you might display snippets and links to the most recent post or review created by the logged in user
