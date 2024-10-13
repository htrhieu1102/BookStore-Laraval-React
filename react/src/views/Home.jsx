import axiosClient from '../axios-client';
import BackToTopButton from '../components/BackToTopButton';
import { useStateConText } from '../contexts/ContextProvider';
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export const Home= () =>  {
	return (
		<div className="main px-4">
			<div className="section__featured-news container row">
				<div className="section__featured-main col-10">
					<div className="featured-first d-flex row  border-bottom pb-4">
						<img className='col-8  p-0' src="https://i1-vnexpress.vnecdn.net/2024/09/29/hg5-1727591601-1727593664.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=Rql6OKftB-Rw2GU9K-5WEw" alt="" />
						<div className="featured-first-content col-4 py-2 p-4">
							<h3 className='featured-title fs-5'>Tìm thấy thi thể 1 nạn nhân vụ sạt lở ở Hà Giang</h3>
							<p className="featured-desription">
								Lực lượng chức năng đã tìm thấy 1 thi thể nạn nhân và tiếp tục tìm kiếm 2 người mất tích tại vụ sạt lở đất xảy ra trên địa bàn xã...
							</p>
						</div>
					</div>
					<div className="featured-relate row mt-4 border-bottom ">
						<div className="relate-item col-4">
							<h5 className='item-title'>Không khí lạnh ảnh hưởng toàn miền Bắc ngày 1.10, có nơi dưới 16 độ C</h5>
							<p className="item-description">Do ảnh hưởng của không khí lạnh, từ ngày 1.10, nhiệt độ thấp nhất ở miền Bắc và Thanh Hóa phổ biến từ 19 - 22 độ C, vùng núi 17 - 19 độ C, vùng...</p>
						</div>
						<div className="relate-item col-4">
							<h5 className='item-title'>Không khí lạnh ảnh hưởng toàn miền Bắc ngày 1.10, có nơi dưới 16 độ C</h5>
							<p className="item-description">Do ảnh hưởng của không khí lạnh, từ ngày 1.10, nhiệt độ thấp nhất ở miền Bắc và Thanh Hóa phổ biến từ 19 - 22 độ C, vùng núi 17 - 19 độ C, vùng...</p>
						</div>
						<div className="relate-item col-4">
							<h5 className='item-title text-justify'>Không khí lạnh ảnh hưởng toàn miền Bắc ngày 1.10, có nơi dưới 16 độ C</h5>
							<p className="item-description">Do ảnh hưởng của không khí lạnh, từ ngày 1.10, nhiệt độ thấp nhất ở miền Bắc và Thanh Hóa phổ biến từ 19 - 22 độ C, vùng núi 17 - 19 độ C, vùng...</p>
						</div>
					</div>
				</div>
				<div className="section__featured-sub col-2">

				</div>
			</div>
			<div className="section__main-container row pt-4 container">
				<div className='col-left col-5'>
					<h4 className="title-breaking-news  text-center">Tin Nóng</h4>
					<div className="item-news border-bottom ">
						<h3 className="title-news">Trung Đông trên bờ vực chiến tranh toàn diện vì xung đột Iran - Israel</h3>
						<div className="news-content row">
							<Link to={'/login'} className='col-5'>
								<img src="https://i1-vnexpress.vnecdn.net/2024/09/27/00165MTS00000207Still001-17274-7056-6455-1727451972.png?w=220&h=132&q=100&dpr=1&fit=crop&s=vP8nxwzOZoa-YuY2Dtzwjg" alt="" className='img-fluid'/>
							</Link>
							<p className="description col-7">Hà NộiGiai đoạn một của bảo tàng Lịch sử Quân sự Việt Nam 2.500 tỷ đồng đang hoàn thiện, đón các đoàn chuyên gia vào thăm, trước khi mở cửa chính thức vào cuối năm 2024.</p>
						</div>
					</div>
					<div className="item-news border-bottom">
						<h3 className="title-news">Trung Đông trên bờ vực chiến tranh toàn diện vì xung đột Iran - Israel</h3>
						<div className="news-content row">
							<Link to={'/login'} className='col-5'>
								<img src="https://i1-vnexpress.vnecdn.net/2024/09/27/00165MTS00000207Still001-17274-7056-6455-1727451972.png?w=220&h=132&q=100&dpr=1&fit=crop&s=vP8nxwzOZoa-YuY2Dtzwjg" alt="" className='img-fluid' />
							</Link>
							<p className="description col-7">Hà NộiGiai đoạn một của bảo tàng Lịch sử Quân sự Việt Nam 2.500 tỷ đồng đang hoàn thiện, đón các đoàn chuyên gia vào thăm, trước khi mở cửa chính thức vào cuối năm 2024.</p>
						</div>
					</div>
					<div className="item-news border-bottom">
						<h3 className="title-news">Trung Đông trên bờ vực chiến tranh toàn diện vì xung đột Iran - Israel</h3>
						<div className="news-content row">
							<Link to={'/login'} className='col-5'>
								<img src="https://i1-vnexpress.vnecdn.net/2024/09/27/00165MTS00000207Still001-17274-7056-6455-1727451972.png?w=220&h=132&q=100&dpr=1&fit=crop&s=vP8nxwzOZoa-YuY2Dtzwjg" alt="" className='img-fluid' />
							</Link>
							<p className="description col-7">Hà NộiGiai đoạn một của bảo tàng Lịch sử Quân sự Việt Nam 2.500 tỷ đồng đang hoàn thiện, đón các đoàn chuyên gia vào thăm, trước khi mở cửa chính thức vào cuối năm 2024.</p>
						</div>
					</div>
					<div className="item-news border-bottom">
						<h3 className="title-news">Trung Đông trên bờ vực chiến tranh toàn diện vì xung đột Iran - Israel</h3>
						<div className="news-content row">
							<Link to={'/login'} className='col-5'>
								<img src="https://i1-vnexpress.vnecdn.net/2024/09/27/00165MTS00000207Still001-17274-7056-6455-1727451972.png?w=220&h=132&q=100&dpr=1&fit=crop&s=vP8nxwzOZoa-YuY2Dtzwjg" alt="" className='img-fluid' />
							</Link>
							<p className="description col-7">Hà NộiGiai đoạn một của bảo tàng Lịch sử Quân sự Việt Nam 2.500 tỷ đồng đang hoàn thiện, đón các đoàn chuyên gia vào thăm, trước khi mở cửa chính thức vào cuối năm 2024.</p>
						</div>
					</div>
				</div>
				<div className="col-right col-7">
					<div className="box-cat">
						<div className="title-group d-flex">
							<h4 className="parent-cate w-auto">Kinh Doanh</h4>
							<p className="sub-cate">Quốc Tế</p>
							<p className="sub-cate">Doanh nghiệp</p>
							<p className="sub-cate">Hoàng hóa</p>
						</div>
						<div className="box-article d-flex justify-content-evenly gap-2 my-2">
							<Card className='border-0'>
								<Card.Img variant="top" src="https://i1-kinhdoanh.vnecdn.net/2024/10/13/2024-10-08t210949z-811628309-r-6797-5091-1728754855.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=u16cZY9saPjrAA_FqwW2Lw" />
								<Card.Body className='px-0'>
									<Card.Title>
										<Card.Link href='#'>
											'Ván cược' ủng hộ Trump của Elon Musk
										</Card.Link>
									</Card.Title>
									<Card.Text>
										Hai tháng qua, Elon Musk dường như đánh cược sự nghiệp kinh doanh vào kết quả của cuộc bầu cử tổng thống Mỹ khi cổ vũ mạnh cho Trump. 
									</Card.Text>
								</Card.Body>
							</Card>
							<Card className='border-0'>
								<Card.Img variant="top" src="https://i1-kinhdoanh.vnecdn.net/2024/10/13/2024-10-08t210949z-811628309-r-6797-5091-1728754855.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=u16cZY9saPjrAA_FqwW2Lw" />
								<Card.Body className='px-0'>
									<Card.Title>'Ván cược' ủng hộ Trump của Elon Musk</Card.Title>
									<Card.Text>
										Hai tháng qua, Elon Musk dường như đánh cược sự nghiệp kinh doanh vào kết quả của cuộc bầu cử tổng thống Mỹ khi cổ vũ mạnh cho Trump.
									</Card.Text>
								</Card.Body>
							</Card >
							<Card className='border-0'>
								<Card.Img variant="top" src="https://i1-kinhdoanh.vnecdn.net/2024/10/13/2024-10-08t210949z-811628309-r-6797-5091-1728754855.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=u16cZY9saPjrAA_FqwW2Lw" />
								<Card.Body className='px-0'>
									<Card.Title>'Ván cược' ủng hộ Trump của Elon Musk</Card.Title>
									<Card.Text>
										Hai tháng qua, Elon Musk dường như đánh cược sự nghiệp kinh doanh vào kết quả của cuộc bầu cử tổng thống Mỹ khi cổ vũ mạnh cho Trump.
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>
					<div className="box-cat">
						<div className="title-group d-flex">
							<h4 className="parent-cate w-auto">Kinh Doanh</h4>
							<p className="sub-cate">Quốc Tế</p>
							<p className="sub-cate">Doanh nghiệp</p>
							<p className="sub-cate">Hoàng hóa</p>
						</div>
						<div className="box-article d-flex justify-content-evenly gap-2">
							<Card className='border-0'>
								<Card.Img variant="top" src="https://i1-kinhdoanh.vnecdn.net/2024/10/13/2024-10-08t210949z-811628309-r-6797-5091-1728754855.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=u16cZY9saPjrAA_FqwW2Lw" />
								<Card.Body className='px-0'>
									<Card.Title>'Ván cược' ủng hộ Trump của Elon Musk</Card.Title>
									<Card.Text>
										Hai tháng qua, Elon Musk dường như đánh cược sự nghiệp kinh doanh vào kết quả của cuộc bầu cử tổng thống Mỹ khi cổ vũ mạnh cho Trump.
									</Card.Text>
								</Card.Body>
							</Card>
							<Card className='border-0'>
								<Card.Img variant="top" src="https://i1-kinhdoanh.vnecdn.net/2024/10/13/2024-10-08t210949z-811628309-r-6797-5091-1728754855.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=u16cZY9saPjrAA_FqwW2Lw" />
								<Card.Body className='px-0'>
									<Card.Title>'Ván cược' ủng hộ Trump của Elon Musk</Card.Title>
									<Card.Text>
										Hai tháng qua, Elon Musk dường như đánh cược sự nghiệp kinh doanh vào kết quả của cuộc bầu cử tổng thống Mỹ khi cổ vũ mạnh cho Trump.
									</Card.Text>
								</Card.Body>
							</Card >
							<Card className='border-0'>
								<Card.Img variant="top" src="https://i1-kinhdoanh.vnecdn.net/2024/10/13/2024-10-08t210949z-811628309-r-6797-5091-1728754855.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=u16cZY9saPjrAA_FqwW2Lw" />
								<Card.Body className='px-0'>
									<Card.Title>'Ván cược' ủng hộ Trump của Elon Musk</Card.Title>
									<Card.Text>
										Hai tháng qua, Elon Musk dường như đánh cược sự nghiệp kinh doanh vào kết quả của cuộc bầu cử tổng thống Mỹ khi cổ vũ mạnh cho Trump.
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>
					<div className="box-cat ">
						<div className="title-group d-flex">
							<h4 className="parent-cate w-auto">Kinh Doanh</h4>
							<p className="sub-cate">Quốc Tế</p>
							<p className="sub-cate">Doanh nghiệp</p>
							<p className="sub-cate">Hoàng hóa</p>
						</div>
						<div className="box-article d-flex justify-content-evenly gap-2">
							<Card className='border-0'>
								<Card.Img variant="top" src="https://i1-kinhdoanh.vnecdn.net/2024/10/13/2024-10-08t210949z-811628309-r-6797-5091-1728754855.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=u16cZY9saPjrAA_FqwW2Lw" />
								<Card.Body className='px-0'>
									<Card.Title>
										<Card.Link href='#'>
											'Ván cược' ủng hộ Trump của Elon Musk
										</Card.Link>
									</Card.Title>
									<Card.Text>
										Hai tháng qua, Elon Musk dường như đánh cược sự nghiệp kinh doanh vào kết quả của cuộc bầu cử tổng thống Mỹ khi cổ vũ mạnh cho Trump.
									</Card.Text>
								</Card.Body>
							</Card>
							<Card className='border-0'>
								<Card.Img variant="top" src="https://i1-kinhdoanh.vnecdn.net/2024/10/13/2024-10-08t210949z-811628309-r-6797-5091-1728754855.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=u16cZY9saPjrAA_FqwW2Lw" />
								<Card.Body className='px-0'>
									<Card.Title>'Ván cược' ủng hộ Trump của Elon Musk</Card.Title>
									<Card.Text>
										Hai tháng qua, Elon Musk dường như đánh cược sự nghiệp kinh doanh vào kết quả của cuộc bầu cử tổng thống Mỹ khi cổ vũ mạnh cho Trump.
									</Card.Text>
								</Card.Body>
							</Card >
							<Card className='border-0'>
								<Card.Img variant="top" src="https://i1-kinhdoanh.vnecdn.net/2024/10/13/2024-10-08t210949z-811628309-r-6797-5091-1728754855.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=u16cZY9saPjrAA_FqwW2Lw" />
								<Card.Body className='px-0'>
									<Card.Title>'Ván cược' ủng hộ Trump của Elon Musk</Card.Title>
									<Card.Text>
										Hai tháng qua, Elon Musk dường như đánh cược sự nghiệp kinh doanh vào kết quả của cuộc bầu cử tổng thống Mỹ khi cổ vũ mạnh cho Trump.
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
			</div>
			<BackToTopButton/>
		</div>
	)
}