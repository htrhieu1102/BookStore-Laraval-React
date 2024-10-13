import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axiosClient from '../axios-client';

export const Header = () => {
	const [cats, setCats] = useState([])	
	const [showDropdowns, setShowDropdowns] = useState({});

	const showDropdown = (index) => {
		setShowDropdowns(prev => ({ ...prev, [index]: true }));
	};

	const hideDropdown = (index) => {
		setShowDropdowns(prev => ({ ...prev, [index]: false }));
	};

	const api = () => {
		axiosClient.get('/cats-with-children')
			.then(({data})=> {
				console.log(data);
				setCats(data);
			})
			.catch(err=>{
				console.error();
			})
	}
	useEffect(()=> {
		api()
	}, [])


	return (
		<header>
			<Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
				<Container fluid>
					<Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							{cats.map((item, index) => (
								<NavDropdown key={index} title={item.name} id="navbarScrollingDropdown" 
									show={showDropdowns[index]}
									onMouseEnter={() => showDropdown(index)}
									onMouseLeave={() => hideDropdown(index)}>
									{item.children.map((item, index)=> (
										<NavDropdown.Item key={index} href="#action3">{item.name}</NavDropdown.Item>
									))}
								</NavDropdown>
							))}
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
