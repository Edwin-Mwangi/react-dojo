const Home = () => {
    //we'll also log out an event obj...just to show
    const handleClick = (e) => {
        console.log('Hello Ninjas', e, e.target)
    }

    //passing args in funcs
    const handleClickAgain = (name, e) => {
        console.log('hello '+ name, e)
    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            {/* click events not invoked with () as they'll run automatically*/}
            <button onClick={ handleClick }> Click me </button>
            {/* handleClickAgain inside arrow func to prevent autorunning coz of(), e unecessary jut to show */}
            <button onClick={ (e)=> handleClickAgain('mario',e)}>Click me Again </button>
        </div>
     );
}
 
export default Home;