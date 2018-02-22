import React from 'react'

export default function Homepage() {

    return (
        <div className="jumbotron jumbotron-fluid">
            {
                <div className="container-fluid">
                    <h3>Welcome to the campus management system for Galacta Academies,</h3>
                    <h3>the highest ranked school network in the Milky Way!</h3>
                    <br />
                    <h4><i>Please log in or sign up to manage your students and campuses.</i></h4>
                    <div className="col-8 d-flex align-items-stretch"><img src="https://images.pexels.com/photos/134074/pexels-photo-134074.jpeg?w=655&h=437&dpr=2&auto=compress&cs=tinysrgb" alt="Pexels" /></div>
                    <br />
                    <h3>Reviews</h3>
                    <br />
                    <blockquote className="blockquote blockquote-reverse">
                        <p className="mb-0">Forget the Milky Way — these are the best schools in the universe.  </p>
                        <footer className="blockquote-footer">President of the Universe
                        </footer>
                    </blockquote>
                </div>
            }
        </div>
    )
}

