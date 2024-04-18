import {categories} from '../assets/Data'

function Category() {
    return (
        <div className='grid grid-cols-3 gap-4 my-12 '>
            {/* First Card */}
            {categories.map((category) => (
            <div key={category.id} className='relative  px-11'>
                <div className=''>
                    <img className='w-[355px] h-[400px] object-cover' src={category.img} alt="" />
                    <div className='absolute inset-0 flex flex-col justify-center items-center'>
                        <h1 className='text-white text-3xl font-bold'>{category.title}</h1>
                        <button className='mt-4 px-6 py-2 bg-black text-white rounded-md hover:text-xl'>SHOP NOW</button>
                    </div>
                </div>
            </div> 
            ))}
        </div>
    );
}

export default Category;
