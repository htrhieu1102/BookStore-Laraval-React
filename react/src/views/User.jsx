import { Tab, Nav, Row, Col } from 'react-bootstrap'

export const User = () => {
	const currentYear = new Date().getFullYear();

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
									<p className="title-content">Thông tin tài khoản</p>
									<form action="">
										<div className="row">
											<div className="col-7">
												<p className="label">Tên hiển thị</p>
												<input className='input' type="text" />
											</div>
											<div className="col-5">
												<p className="label">Giới tính</p>
												<div className="list-radio">
													<input type="radio" name="gender" id="" />
													<label htmlFor="Nam">Nam</label>
													<input type="radio" name="gender" id="" />
													<label htmlFor="Nam">Nữ</label>
													<input type="radio" name="gender" id="" />
													<label htmlFor="Khác">Khác</label>
												</div>
											</div>
										</div>
										<div className="row">
											<p className="label">Ngày sinh</p>
											<div className="col-4">
												<select name="day" id="">
													<option value=""></option>
													{Array.from({ length: 31 }, (_, i) => (
														<option key={i + 1} value={i + 1}>{i + 1}</option>
													))}
												</select>
											</div>
											<div className="col-4">
												<select name="month" id="">
													<option value=""></option>
													{Array.from({ length: 12 }, (_, i) => (
														<option key={i + 1} value={i + 1}>Tháng {i + 1}</option>
													))}
												</select>
											</div>
											<div className="col-4">
												<select name="year" id="">
													<option value=""></option>
													{Array.from({ length: 101}, (_, i) => (
														<option key={currentYear - 100 + i} value={i + currentYear - 100}>{i + currentYear - 100}</option>
													))}
												</select>
											</div>
										</div>
										<div className="row">
											<div className="col-6">
												<p className="label">Email</p>
												<input className='input' type="email" />
											</div>
											<div className="col-6">
												<p className="label">Điện thoại</p>
												<input className='input' type="email" />
											</div>
											{/* <div className="col-4">
												<p className="label">Email</p>
												<input className='input' type="email" />
											</div> */}
										</div>
										<div className="box-button text-end">
											<button className="button-send">Lưu thay đổi</button>
										</div>
									</form>
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