import React from 'react';

const Home = () => {
  const [query, setQuery] = React.useState({});

  const handleChange = (event) => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/api/listings', {
      method: 'post', body: JSON.stringify(query),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return (
    <div>
      <h1>spacecats</h1>
      <form method='get' onSubmit={handleSubmit}>
        <input type="text" value={query.q || ""} name="q" id="q" onChange={handleChange} placeholder="search something"></input>
        <input type="text" value={query.post || ""} name="post" id="post" onChange={handleChange} placeholder="search something"></input>
        <input type="submit" value="Search" />
      </form>
      {/*           <div>
        <input type="checkbox" id="health" name="health" checked />
        <label for="scales">Health Care</label>
      </div>
  
      <div>
        <input type="checkbox" id="young" name="young" />
        <label for="horns">Youth Support</label>
      </div>

        <div>
        <input type="checkbox" id="food" name="food" />
        <label for="horns">Horns</label>
      </div>

        <div>
        <input type="checkbox" id="community" name="community" />
        <label for="horns">Community Center</label>
      </div>

        <div>
        <input type="checkbox" id="young" name="food" />
        <label for="horns">Horns</label>
      </div>

        <div>
        <input type="checkbox" id="young" name="food" />
        <label for="horns">Horns</label>
      </div> */}
    </div>
  );
};

export default Home;