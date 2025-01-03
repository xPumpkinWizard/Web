import logo from './logo.svg';
import './App.css';

function App() {

    const friends = [
        {name: "Alice", description: "Loves hiking", comment: "Met in college", ditched: false},
        {name: "Bob", description: "Video game enthusiast", comment: "Childhood friend", ditched: false},
        {name: "Charlie", description: "Coffee connoisseur", comment: "Work buddy", ditched: true},
        {name: "Dana", description: "Avid reader", comment: "Book club", ditched: false}
    ];

    return (
        <div className="container">
            <h1 className="my-4">Friends</h1>
            <div className="row">
                {friends.map((friend, index) => (
                    <div className="card m-2 w-25" key={index}>
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: friend.ditched ? 'red' : 'inherit' }}>{friend.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{friend.description}</h6>
                            <p className="card-text">{friend.comment}</p>
                            {!friend.ditched && <button className="btn btn-danger">Ditch</button>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default App;
