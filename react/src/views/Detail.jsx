import React, {useState} from "react";
import { useParams } from 'react-router-dom'
import {Nav, Tab} from 'react-bootstrap'
import BackToTopButton from "../components/BackToTopButton";
import '../assets/css/style.css'
export const Detail = () => {
	const { slug } = useParams();
	const [key, setKey] = useState('home');

	return (
		<div className="main">
			<div className="row container">
				<div className="col-8">
					<div className="header-content d-flex justify-content-between">
						<ul className="breadcrumb">
							<li>Kinh doanh</li>
							<li>Quốc tế</li>
						</ul>
						<span className="time-content">Chủ nhật, 13/10/2024, 08:31 (GMT+7)</span>
					</div>
					<h2 className="title font-bold mb-4">Giá dầu liệu quay lại đỉnh 120 USD mỗi thùng?</h2>
					<p className="description font-bold fs-6">Căng thẳng ở Trung Đông tăng nhưng nhu cầu không mạnh và cung dồi dào khiến kịch bản giá dầu quay lại đỉnh 120 USD mỗi thùng khó xảy ra.</p>
					<img
						className="image img-fluid"
						src="https://i1-kinhdoanh.vnecdn.net/2024/10/13/2022-05-23T134115Z-886798033-R-1795-1241-1728753591.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=GQJq-RZaSvStDpAQ7tKseA" alt="" />

					<p className="content">
						Trên khắp thế giới, người tiêu dùng, tài xế và chính trị gia đều lo lắng về giá dầu. Xung đột giữa Israel và Hamas đang lan rộng. Nếu chiến tranh toàn diện bùng nổ giữa Israel và Iran tại Trung Đông – khu vực sản xuất một phần ba lượng dầu thô trên thế giới – rõ ràng là đáng sợ.<br />

						Sau khi Israel tấn công Hezbollah và Iran đáp trả bằng khoảng 200 tên lửa, giá dầu đạt 81 USD mỗi thùng hôm 7/10 rồi giảm nhẹ. Đến cuối ngày thứ sáu (11/10), giá dầu Brent còn 79,04 USD trong khi dầu WTI về mức 75,56 USD.<br />

						Tính chung cả tuần qua, giá hai loại dầu này vẫn tăng hơn 1%. Các nhà đầu tư đã tăng vị thế mua ròng dầu thô Brent lên 165.008 hợp đồng trong tuần tính đến ngày 11/10, theo Intercontinental Exchange
						Tim Snyder, Kinh tế trưởng tại Matador Economics, đánh giá thị trường có thể cảm nhận được căng thẳng khi Israel xem xét quy mô và hình thức phản ứng trước cuộc tấn công tên lửa của Iran. "Nếu Israel phá hủy cơ sở hạ tầng dầu khí của Iran, giá sẽ tăng", ông nói.<br />

						Cách đây hai năm rưỡi, xung đột Nga và Ukraine từng đẩy giá dầu lên hơn 120 USD một thùng, khi phương Tây áp đặt các lệnh trừng phạt lên Nga, gây lo ngại gián đoạn nguồn cung từ nhà xuất khẩu dầu lớn thứ hai thế giới.<br />

						Lần này điều gì có thể xảy ra? Nếu cuộc chiến tệ hơn, cú sốc dầu nghiêm trọng có thể xảy ra. Nhưng do nguồn cung dồi dào, thị trường dầu ít bị tổn thương bởi cú sốc như vậy hơn so với năm 2022.<br />

						Israel vẫn chưa trả đũa Iran. Vào ngày 3/10, Tổng thống Mỹ Joe Biden gây chấn động thị trường khi ám chỉ rằng cơ sở hạ tầng dầu mỏ của Iran có thể nằm trong tầm ngắm của Israel. Tuy nhiên, đó chỉ là một trong nhiều mục tiêu có thể xảy ra. Ngay cả khi sản lượng dầu của Iran bị gián đoạn, Iran không phải là nhà sản xuất lớn như Nga. Iran xuất khẩu gần 2 triệu thùng mỗi ngày, tương đương khoảng 2% nguồn cung toàn cầu. Trong khi đó, Nga xuất khẩu gần 5 triệu thùng mỗi ngày.

						Bức tranh toàn cầu cũng khác biệt rõ rệt so với năm 2022. Khi Nga tiến quân vào Ukraine, dầu đang khan hiếm và nhu cầu tăng vọt khi các nền kinh tế trên thế giới thoát khỏi các đợt phong tỏa vì Covid. Trong khi, thế giới giờ tràn ngập dầu.<br />
					</p>
					<div className="comment">
						<div className="box-comment">
							<p className="header-comment">Bình luận</p>
							<textarea className="text-comment" name="" id="" placeholder="Nhập bình luận"></textarea>
							<div className="box-button text-end">
								<button className="button-send">Gửi bình luận</button>
							</div>
						</div>
						<div className="filter-comment">
							<Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
								<Nav variant="tabs">
									<Nav.Item>
										<Nav.Link eventKey="home">Mới nhất</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="profile">Quan tâm nhất</Nav.Link>
									</Nav.Item>
								</Nav>
								<Tab.Content>
									<Tab.Pane eventKey="home">										
										<p>This is the home tab content.</p>
									</Tab.Pane>
									<Tab.Pane eventKey="profile">
										<p>This is the profile tab content.</p>
									</Tab.Pane>
								</Tab.Content>
							</Tab.Container>
						</div>
					</div>
				</div>
				<div className="col-4 mt-4">
					<h4 className="title-box-category">Liên quan</h4>
					<div className="item-news row border-bottom pb-4">
						<img src="https://i1-kinhdoanh.vnecdn.net/2024/10/11/starbuck-1728638546-1728638558-7783-1728639662.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=XvqODPB7ZDnKUaULCHmv3g"
							alt=""
							className="img-fluid col-6"
							width={300}
							height={180}
						/>
						<p className="description col-6 fw-bold">
							4 cách giảm phát thải của các ông lớn toàn cầu
						</p>
					</div>
					<div className="item-news row border-bottom pb-4">
						<img src="https://i1-kinhdoanh.vnecdn.net/2024/10/11/starbuck-1728638546-1728638558-7783-1728639662.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=XvqODPB7ZDnKUaULCHmv3g"
							alt=""
							className="img-fluid col-6"
							width={300}
							height={180}
						/>
						<p className="description col-6 fw-bold">
							4 cách giảm phát thải của các ông lớn toàn cầu
						</p>
					</div>

					<div className="item-news row border-bottom pb-4">
						<img src="https://i1-kinhdoanh.vnecdn.net/2024/10/11/starbuck-1728638546-1728638558-7783-1728639662.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=XvqODPB7ZDnKUaULCHmv3g"
							alt=""
							className="img-fluid col-6"
							width={300}
							height={180}
						/>
						<p className="description col-6 fw-bold">
							4 cách giảm phát thải của các ông lớn toàn cầu
						</p>
					</div>
					<div className="item-news row border-bottom pb-4">
						<img src="https://i1-kinhdoanh.vnecdn.net/2024/10/11/starbuck-1728638546-1728638558-7783-1728639662.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=XvqODPB7ZDnKUaULCHmv3g"
							alt=""
							className="img-fluid col-6"
							width={300}
							height={180}
						/>
						<p className="description col-6 fw-bold">
							4 cách giảm phát thải của các ông lớn toàn cầu
						</p>
					</div>
					<div className="item-news row border-bottom pb-4">
						<img src="https://i1-kinhdoanh.vnecdn.net/2024/10/11/starbuck-1728638546-1728638558-7783-1728639662.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=XvqODPB7ZDnKUaULCHmv3g"
							alt=""
							className="img-fluid col-6"
							width={300}
							height={180}
						/>
						<p className="description col-6 fw-bold">
							4 cách giảm phát thải của các ông lớn toàn cầu
						</p>
					</div>
				</div>
			</div>
			<BackToTopButton />
		</div>
	)

}