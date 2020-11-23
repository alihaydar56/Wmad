import React, { Component } from "react";
import "./Footer.css";
import {Container,Row,Col} from 'reactstrap';
export default class Footer extends Component {
	render() {
		return (
			<>
				<footer className="footer pt-2 ">
					<div className="container mt-2">
						<div className="row d-flex justify-content-between">
							<div className="col-md-6 text-left footer-text-container">
								<p className="footer-text"> © 2020 reserved by Wmad</p>
							</div>
							<div className="col-md-4 footer-links text-right">
								<div className="container">
									<a
										href="#"
										target="_blank"
										className=""
									>
										Github
									</a>
									<a
										href="#"
										target="_blank"
									>
										Instagram
									</a>
									<a href="#" target="_blank">
										Linkedin
									</a>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</>
		);
	}
}