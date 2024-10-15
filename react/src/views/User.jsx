import {Tab, Nav, Row, Col} from 'react-bootstrap'

export const User = () => {
	return (
		<div className="main">
			<div className="container">
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<Row>
						<Col sm={3} className='box-menu'>
							<div className="user-infor">
								<div className="avater d-flex flex-column align-items-center mb-3">
									<img className='w-50 rounded-circle' src="https://lh3.googleusercontent.com/a/ACg8ocJVM0za56k6WfhGJ1rbJJdgYUpZuOc-E1pn5QuR4H4xaagBXA=s96-c" alt="" />
								</div>
								<p className="name text-center fw-bold text-white">Hiếu Hoàng</p>
							</div>
							<Nav variant="pills" className="flex-column">
								<div className="group-menu">
									<Nav.Item className='p-0'>
										<Nav.Link eventKey="create-article">Đăng bài báo</Nav.Link>
									</Nav.Item>
								</div>
								<div className="group-menu">
									<Nav.Item className='p-0'>
										<Nav.Link eventKey="infor-user">Thông tin tài khoản</Nav.Link>
									</Nav.Item>
									<Nav.Item className='p-0'>
										<Nav.Link eventKey="change-password">Đổi mật khẩu</Nav.Link>
									</Nav.Item>
								</div>
								<div className="group-menu">
									<Nav.Item>
										<Nav.Link eventKey="log-out">Đăng xuất</Nav.Link>
									</Nav.Item>
								</div>
							</Nav>
						</Col>
						<Col sm={9}>
							<Tab.Content>
								<Tab.Pane eventKey="infor-user" className='change-information'>
									
								</Tab.Pane>
								<Tab.Pane eventKey="change-password">Second tab content</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</div>
		</div>
	)
}