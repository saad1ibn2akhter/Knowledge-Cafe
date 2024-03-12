import Profile from '../../../profile.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between mx-auto container my-4 border-b-2 p-3'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={Profile} alt="" />

        </div>
    );
};

export default Header;