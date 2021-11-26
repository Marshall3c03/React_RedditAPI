import './App.css';
import RedditHeader from './components/RedditHeader';
import RedditContentContainer from './containers/RedditContentContainer';


function App() {

  const categories = [
    {name: "Hot",url:"https://www.reddit.com/r/meme/hot/.json"},
    {name: "New",url:"https://www.reddit.com/r/meme/new/.json"},
    {name: "Top",url:"https://www.reddit.com/r/meme/top.json?t=all"}
  ]

  return (
    <div>
      <RedditHeader />
      <RedditContentContainer categories={categories}/>
    </div>
  );
}

export default App;
