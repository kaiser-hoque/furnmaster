import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { Latestblog } from "../../API/latestblog";

const Blog = () => {
  const [latestblogsData, setLatestBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Latestblog();
        setLatestBlogData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <section id="blog" className="blog">
        <div className="container">
          <div className="section-header">
            <h2>latest blog</h2>
          </div>

          {/* <!--/.section-header--> */}
          <div className="blog-content">
            <div className="row">
              {latestblogsData.map((blog, index) => (
                <div className="col-sm-4" key={index}>
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <img src={blog.lbimage} alt="blog image" />
                      <div className="single-blog-img-overlay"></div>
                    </div>
                    <div className="single-blog-txt">
                      <h2>
                        <a href="#">{blog.lbheading}</a>
                      </h2>
                      <h3>
                        By <a href="#">{blog.lbname}/</a>
                        {blog.lbdate}{" "}
                      </h3>
                      <p>{blog.lbdescription}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="col-sm-4">
							<div className="single-blog">
								<div className="single-blog-img">
									<img src="assets/images/blog/b2.jpg" alt="blog image"/>
									<div className="single-blog-img-overlay"></div>
								</div>
								<div className="single-blog-txt">
									<h2><a href="#">Why Brands are Looking at Local Language</a></h2>
									<h3>By <a href="#">Robert Norby</a> / 18th March 2018</h3>
									<p>
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.... 
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="single-blog">
								<div className="single-blog-img">
									<img src="assets/images/blog/b3.jpg" alt="blog image"/>
									<div className="single-blog-img-overlay"></div>
								</div>
								<div className="single-blog-txt">
									<h2><a href="#">Why Brands are Looking at Local Language</a></h2>
									<h3>By <a href="#">Robert Norby</a> / 18th March 2018</h3>
									<p>
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.... 
									</p>
								</div>
							</div>
						</div> */}
            </div>
          </div>
        </div>

        {/* <!--/.container--> */}
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
