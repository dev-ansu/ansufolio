export const Dot = ({classes}: {classes?: string})=>{

    const classesNew = "text-purple-300 roboto-medium" + classes;

    return(
        <span className={classesNew}>.</span>
    );
}