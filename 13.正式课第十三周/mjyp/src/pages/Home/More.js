import React from "react";
import "./More.less";
import {Link} from "react-router-dom";
// NavLink: 比Link多一个class为active  Link
function More(props){
    return <div className="title-box">
        <span>{props.title}</span>
        <Link to={props.link}>
            <span>更多</span>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAQCAYAAAArij59AAAAAXNSR0IArs4c6QAAAQ1JREFUKBVjmD17dggDHsD0////pbNmzXLBpQakYCIQr58zZ44ZNkWMIEGgCXOBivxZWVntkpKSriErZAJxBAQE0hgZGQ/9/v17F9AkeWQFYBNAAtu2bWN/8uTJNqBJspycnDZxcXGvQOJgE0AMLy+vn0CT/IHMj9+/f9+xZMkSPpA4XAGIExYW9gVIeQIx57dv39aAxFAUgATQAYqCuXPn8gIVbAfi71xcXOAAhCsAOfLv378bgJL8QEd6xMTEfAKZxgIiVq1axQz0wXKgD9SZmZmtYT6AK/jw4cMsoKQdNKAegiRggGXmzJldQMkwoE5n9FAEKWIBhmA+kPZOSUk5BdOFQgPjIRhFAI0DAM81ZrZ7OL78AAAAAElFTkSuQmCC"></img>
        </Link>
    </div>
}
export default More;