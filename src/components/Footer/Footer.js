import React from 'react'
import './styles.scss'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render(){
        return (
           <div>
                <footer class="page-footer font-small mdb-color pt-4">
                    <div className="container text-center text-md-left">
                        <div className="row text-center text-md-left mt-3 pb-3">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Gonzalo Romero</h6>
                                <p>Here you can use rows and columns to organize your footer content. You can use for whatever you whant.</p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p>
                                <a href="#!">Seller`s info</a>
                                </p>
                                <p>
                                <a href="#!">Buyer`s info</a>
                                </p>
                            </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">About me</h6>
                            <p>
                            <a href="#!">Gonzalo Romero</a>
                            </p>
                            <p>
                            <a href="#!">Another space</a>
                            </p>
                            <p>
                            <a href="#!">Another space</a>
                            </p>
                            <p>
                            <a href="#!">Help</a>
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p>
                            <i className="fas fa-home mr-3"></i> Florida, US</p>
                            <p>
                            <i className="fas fa-envelope mr-3"></i> goropa58@hotmail.com</p>
                            <p>
                            <i className="fas fa-phone mr-3"></i> + 86 232 425 52</p>
                        </div>

                        </div>

                        <hr />

                        <div className="row d-flex align-items-center">

                        <div className="col-md-7 col-lg-8">

                            <p className="text-center text-md-left">© 2019 Copyright:
                            <a href="https:www.gonzaromero.com">
                                <strong> gonzaromero.com</strong>
                            </a>
                            </p>

                        </div>

                        <div className="col-md-5 col-lg-4 ml-lg-0">

                            <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                    <i className="fab fa-google-plus-g"></i>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                  <i class="fab fa-facebook"></i>
                                </a>
                                </li>
                            </ul>
                            </div>

                        </div>

                        </div>

                    </div>
                </footer>
           </div>
        )
    }
}

