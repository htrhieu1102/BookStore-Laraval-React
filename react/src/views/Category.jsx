import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axiosClient from "../axios-client";


export const Category = () => {
	const { parentSlug, childSlug } = useParams();
	let category = childSlug ?? parentSlug;
	const [articles, setArticles] = useState({});

	const api = () => {
		axiosClient.get(`category/${category}`)
		.then(({data})=> {
			setArticles(data)
			
		})
		.catch(error => {
			console.log(error.response);
			
		})
	}
	useEffect(()=> {
		api();
	}, [parentSlug, childSlug])
	console.log(articles);
	
	
	return (
		<div className="main">
			<div className="container">
				<div className="box-breadcrumb">
					{childSlug ?<h3>{articles.parent.name}</h3> :
						<h3>{articles.name}</h3> 
					}
					
				</div>
				<div className="box-breadcrumb-sub">
					<a href="">Quân sự</a>
					<a href="">Góc nhìn</a>
					<a href="">Hỗ trợ</a>
				</div>
				<div className="row mt-4">
					{articles && articles.articles && articles.articles.length > 0 ? (
						articles.articles.map((item, index) => (
							<div className="col-lg-3 col-sm-6 most-popular" key={index}>
								<a href={`/detail/${item.slug}`}>
									<img
										src="https://images2.thanhnien.vn/zoom/253_158/528068263637045248/2024/10/21/2024-10-21t103931z83588663rc2yoaaaqoh7rtrmadp3israel-palestinians-lebanon-envoy-17295149388101729168030-76-0-1676-2560-crop-1729514998013751800514.jpg"
										alt=""
										className="img-fluid"
									/>
								</a>
								<a className="mb-0 mx-2 mt-1 most-popular-category" href={``}>
									{item.category.name}
								</a>
								<h3 className="most-popular-title">
									{item.title}
								</h3>
							</div>
						))
					) : (
						<p>No articles available</p> // Hiển thị thông báo khi không có bài viết
					)}
					
					
				</div>
			</div>
		</div>
	)
}