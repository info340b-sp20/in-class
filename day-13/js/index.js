// Main.js file
'use strict';

// Data: a group of people
const PEOPLELIST = [
    { name: "Jacob", interest: "Board Games", location: "Edmonds" },
    { name: "James", interest: "Music", location: "Seattle" },
    { name: "Elizabeth", interest: "Books", location: "Woodinville"},
    { name: "Gordie", interest: "Beer", location: "Vancouver, WA"},
    { name: "Michael", interest: "Basketball", location: "Chicago"}
];

// Class for an individual person
class Person extends React.Component {
    render() {
        return (
            <div class="person">
                <p>Hello, my name is {this.props.name} and I am interested in {this.props.interest}.</p>
                <p>I'm located in {this.props.location}!</p>
            </div>
        );
    }
}

// Class to represent a group of people
class People extends React.Component {
    render() {
        return (this.props.group.map((d) => {
            return <Person key={d.name} name={d.name} interest={d.interest} location={d.location} />
        }))
    }
}

// Render your component in the `main` section
ReactDOM.render(
    <People group={PEOPLELIST} />,
    document.querySelector('main')
);