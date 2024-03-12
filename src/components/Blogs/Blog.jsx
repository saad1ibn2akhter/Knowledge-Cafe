import PropTypes from 'prop-types'
import cover from '../../../1.jpg'
import author_image from '../../../boy1.png'
const Blog = ({ blog }) => {
    const { title, reading_time, author, posted_date, hashtags } = blog;
    console.log(blog);
    return (
        <div>
            <img src={cover} alt="" />
            <h1>{title}</h1>
            <p className='space-x-3'>
                {
                    hashtags.map((hashtag, idx) => <span key={idx} className='space-x-3'>{hashtag}</span>)
                }
            </p>
            <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-3'>
                    <div>
                        <img className='w-[64px] h-[64px] rounded-full' src={author_image} alt="" />
                    </div>
                    <div>
                        <h1>{author}</h1>
                        <h1>{posted_date}</h1>
                    </div>
                </div>
                <div>
                    <h1>{reading_time}</h1>
                </div>
            </div>
        </div>
    )
}
Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
}
export default Blog;