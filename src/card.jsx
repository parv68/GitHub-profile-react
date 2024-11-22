function Card({ user }) {
    const { avatar_url, name, location, followers, following, public_repos, login, created_at } = user;
    const createdDate = new Date(created_at);
  
    return (
      <div className="card">
        <div>
          <img src={avatar_url} alt="User" className="avatar" />
        </div>
        <div>
          <a href={`https://github.com/${login}`}>{name || login}</a>
          <p>
            User joined on{' '}
            {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {
              month: 'short',
            })} ${createdDate.getFullYear()}`}
          </p>
        </div>
        <div>
          <p>Public Repos: {public_repos}</p>
        </div>
        <div>
          <p>Followers: {followers}</p>
        </div>
        <div>
          <p>Following: {following}</p>
        </div>
        <div>
          <p>Location: {location || 'Not available'}</p>
        </div>
      </div>
    );
  }
  
  export default Card;
  