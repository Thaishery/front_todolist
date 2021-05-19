export default function CoursesComponent(props){
    return (
        <li id={props.id}>
            <p>
                article : {props.name} - quantité : {props.quantity}
            </p>
        </li>
    )
};