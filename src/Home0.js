//useState is a hook to make vars reactive
import { useState } from "react"

const Home = () => {
    // let firstname = 'mario' //unreactive so react doen't rerender
    //made reactive (destructuring used)ie 2 vals returned from useState
    //(i) arg returned from the useState(arg) stored in firstname..arg is any datatype
    //(ii) a func is also returned and stord in setVarname
    const [ firstname, setFirstname] = useState('mario')
    const [ age, setAge] = useState(25)
 
 
    //we'll also log out an event obj...just to show
    const handleClick = (e) => {
        console.log('Hello Ninjas', e, e.target)

        //firstname not changed when handleclick is run so...
        // firstname =  'luigi'

        //make value reactive and use setVarname for changes
        setFirstname('kukurukakara')
        setAge(32)

    }

    //passing args in funcs
    const handleClickAgain = (name, e) => {
        console.log('hello '+ name, e)
    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ firstname } is { age } years old.</p>
            {/* click events not invoked with () as they'll run automatically*/}
            <button onClick={ handleClick }> Click me </button>
            {/* handleClickAgain inside arrow func to prevent autorunning coz of(), e unecessary jut to show */}
            <button onClick={ (e)=> handleClickAgain('mario',e)}>Click me Again </button>
        </div>
     );
}
 
export default Home0;