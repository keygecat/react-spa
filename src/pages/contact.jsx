function Contact() {
    return (
        <div className="row">
            <div className="col s12">
                <h2 className="center-align">Contact us</h2>
            </div>

            <form className="col s12 orange lighten-4">
                <div className="row form-item">
                    <div className="input-field col s6">
                        <input placeholder="First Name" id="first_name" type="text" className="validate"/>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="Last Name" id="last_name" type="text" className="validate"/>
                    </div>
                </div>
                <div className="row form-item">
                    <div className="input-field col s12">
                        <input placeholder="Password" id="password" type="password" className="validate"/>
                    </div>
                </div>
                <div className="row form-item">
                    <div className="input-field col s12">
                        <input placeholder="Email" id="email" type="email" className="validate"/>
                    </div>
                </div>
            </form>

            <div className="center-align">
                <button className="btn orange darken-1">
                    Send
                </button>
            </div>

        </div>
    );
}

export { Contact };