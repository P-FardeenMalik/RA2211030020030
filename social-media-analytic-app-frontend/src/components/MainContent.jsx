import React from 'react';

const MainContent = ({ activeLink }) => {
  return (
    <div className="relative -top-[16px] ml-[20px] p-4 flex-1 bg-gray-800 min-w-[83.33vw] min-h-[90.7vh] px-44">
      {activeLink === 'Posts' && (
        <>
            <h2 className="text-2xl font-bold mb-4 text-white text-center pb-8">Posts</h2>
            <div className='grid grid-cols-2 gap-32'>
                <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4 flex flex-col items-center justify-center space-y-4">
                    <img src="/src/assets/rahul.jpg" alt="" className='max-h-[400px] max-w-[400px] rounded-lg' />
                    <h3 className="text-xl font-bold self-start px-12">Rahul Bhatia</h3>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4 flex flex-col items-center justify-center space-y-4">
                    <img src="/src/assets/rachael.jpg" alt="" className='max-h-[400px] max-w-[400px] rounded-lg' />
                    <h3 className="text-xl font-bold self-start px-12">Rahul Bhatia</h3>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4 flex flex-col items-center justify-center space-y-4">
                    <img src="/src/assets/rahul.jpg" alt="" className='max-h-[400px] max-w-[400px] rounded-lg' />
                    <h3 className="text-xl font-bold self-start px-12">Rahul Bhatia</h3>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4 flex flex-col items-center justify-center space-y-4">
                    <img src="/src/assets/rahul.jpg" alt="" className='max-h-[400px] max-w-[400px] rounded-lg' />
                    <h3 className="text-xl font-bold self-start px-12">Rahul Bhatia</h3>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4 flex flex-col items-center justify-center space-y-4">
                    <img src="/src/assets/rahul.jpg" alt="" className='max-h-[400px] max-w-[400px] rounded-lg' />
                    <h3 className="text-xl font-bold self-start px-12">Rahul Bhatia</h3>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4 flex flex-col items-center justify-center space-y-4">
                    <img src="/src/assets/rahul.jpg" alt="" className='max-h-[400px] max-w-[400px] rounded-lg' />
                    <h3 className="text-xl font-bold self-start px-12">Rahul Bhatia</h3>
                </div>
            </div>
        </>
      )}
      {activeLink === 'Feed' && (
        <>
        <h2 className="text-2xl font-bold mb-4 text-white text-center pb-8">Feeds</h2>
        <div className='grid grid-cols-2 gap-32'>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4 flex flex-col items-center justify-center space-y-4">
                <img src="/src/assets/rahul.jpg" alt="" className='max-h-[400px] max-w-[400px] rounded-lg' />
                <h3 className="text-xl font-bold self-start px-12">Rahul Bhatia</h3>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4 flex flex-col items-center justify-center space-y-4">
                <img src="/src/assets/rachael.jpg" alt="" className='max-h-[400px] max-w-[400px] rounded-lg' />
                <h3 className="text-xl font-bold self-start px-12">Rahul Bhatia</h3>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4 flex flex-col items-center justify-center space-y-4">
                <img src="/src/assets/rahul.jpg" alt="" className='max-h-[400px] max-w-[400px] rounded-lg' />
                <h3 className="text-xl font-bold self-start px-12">Rahul Bhatia</h3>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4 flex flex-col items-center justify-center space-y-4">
                <img src="/src/assets/rahul.jpg" alt="" className='max-h-[400px] max-w-[400px] rounded-lg' />
                <h3 className="text-xl font-bold self-start px-12">Rahul Bhatia</h3>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4 flex flex-col items-center justify-center space-y-4">
                <img src="/src/assets/rahul.jpg" alt="" className='max-h-[400px] max-w-[400px] rounded-lg' />
                <h3 className="text-xl font-bold self-start px-12">Rahul Bhatia</h3>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4 flex flex-col items-center justify-center space-y-4">
                <img src="/src/assets/rahul.jpg" alt="" className='max-h-[400px] max-w-[400px] rounded-lg' />
                <h3 className="text-xl font-bold self-start px-12">Rahul Bhatia</h3>
            </div>
        </div>
    </>
      )}
      {activeLink === 'Create Post' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Create Post</h2>
        </div>
      )}
      {activeLink === 'Profile' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
        </div>
      )}
    </div>
  );
};

export default MainContent;
