import Image from 'next/image';
import React from 'react';

const Main = () => {
  return (
    <>
      <main className="flex-1 flex-col justify-between px-5">
        <header className="flex justify-between items-center h-16 ">
          <div className="flex items-center gap-2">
            <button className="flex items-center content-center bg-secondary  rounded-lg p-2  w-44">
              <Image  src="/images/home.svg" alt="Home icon" height={25} width={25}></Image>
              <h1 className="ms-3">Home</h1>
            </button>
            <button className="flex items-center content-center bg-main hover:bg-secondary rounded-lg p-2  w-44">
              <Image  src="/images/star.svg" alt="Discover icon" height={25} width={25}></Image>
              <h1 className="ms-3">Discover</h1>
            </button>
            <button className="flex items-center content-center bg-main hover:bg-secondary rounded-lg p-2  w-44">
              <Image  src="/images/search.svg" alt="Search icon" height={25} width={25}></Image>
              <h1 className="ms-3">Search</h1>
            </button>
          </div>
          <div className="flex items-center gap-5">
            <a href="#">
              <Image  src="/images/notification.svg" alt="Notification icon" height={30} width={30}></Image>
            </a>
            <a href="#">
              <Image  src="/images/unlock.svg" alt="Unlock icon" height={25} width={25}></Image>
            </a>
            <a href="#">
              <Image  src="/images/people.svg" alt="People icon" height={35} width={35}></Image>
            </a>
            <a href="#">
              <Image  src="/images/config.svg" alt="Config icon" height={25} width={25}></Image>
            </a>
            <a href="#">
              <Image  src="/images/user.svg" alt="User icon" height={25} width={25}></Image>
            </a>
            
          </div>
        </header>
        <main className="border flex-1 rounded p-2 border-zinc-900 overflow-auto max-h-[825px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-2 ">
              <button className="flex items-center content-center bg-white  rounded-lg p-1">            
                <h1 className="px-3 text-zinc-800 font-bold">All</h1>
              </button>
              <button className="flex items-center content-center bg-main hover:bg-secondary  rounded-lg p-1">            
                <h1 className="px-3 text-zinc-200 ">Music</h1>
              </button>
              <button className="flex items-center content-center bg-main hover:bg-secondary  rounded-lg p-1">            
                <h1 className="px-3 text-zinc-200 ">Podcasts</h1>
              </button>
              <button className="flex items-center content-center bg-main hover:bg-secondary  rounded-lg p-1">            
                <h1 className="px-3 text-zinc-200 ">Audiobooks</h1>
              </button>
            </div>
            <div>
              <button className="flex items-center content-center bg-main hover:bg-secondary  rounded-lg p-1">            
                <Image  src="/images/settings.svg" alt="Home icon" height={20} width={20}></Image>
              </button>
            </div>
          </div>   
          <div id="albums">            
            <div className="flex justify-between my-6">
              <h1 className="text-3xl">Made For You</h1>
              <div className="flex gap-5">
                <Image src="/images/leftStickArrow.svg" alt="leftStickArrow icon" height={18} width={18}></Image>
                <Image  src="/images/rightStickArrow.svg" alt="rightStickArrow icon" height={18} width={18}></Image>
                <Image  src="/images/dots.svg" alt="dots icon" height={18} width={18}></Image>
              </div>
            </div>
            <div className="flex space-x-5 justify-between">          
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
            </div>
          </div>
          <div id="albums">            
            <div className="flex justify-between my-6">
              <h1 className="text-3xl">Made For You</h1>
              <div className="flex gap-5">
                <Image src="/images/leftStickArrow.svg" alt="leftStickArrow icon" height={18} width={18}></Image>
                <Image  src="/images/rightStickArrow.svg" alt="rightStickArrow icon" height={18} width={18}></Image>
                <Image  src="/images/dots.svg" alt="dots icon" height={18} width={18}></Image>
              </div>
            </div>
            <div className="flex space-x-5 justify-between">          
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
            </div>
          </div>
          <div id="albums">            
            <div className="flex justify-between my-6">
              <h1 className="text-3xl">Made For You</h1>
              <div className="flex gap-5">
                <Image src="/images/leftStickArrow.svg" alt="leftStickArrow icon" height={18} width={18}></Image>
                <Image  src="/images/rightStickArrow.svg" alt="rightStickArrow icon" height={18} width={18}></Image>
                <Image  src="/images/dots.svg" alt="dots icon" height={18} width={18}></Image>
              </div>
            </div>
            <div className="flex space-x-5 justify-between">          
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
              <div className="w-48 h-25 flex flex-col align-items">
                <Image className="self-center" src="/images/albumDisk.svg" alt="dots icon" height={210} width={210}></Image>
                <div className="flex justify-between mb-2 text-lg">
                  <h1 className="text-zinc-300">Discover Weekly</h1>
                  <p className="text-purple-400">50</p>
                </div>
                <p className="text-zinc-400">Your weekly mixtape of fresh music.</p>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex w-full h-24 px-5 m-1 justify-between items-center  bottom-0 rounded-lg bg-[#333842]">
          <div className="flex gap-3 ">
            <div className="w-10 h-10 rounded-full bg-green-500 flex justify-center item-center">
              <Image src="/images/pause.svg" alt="pause icon" height={10} width={10}></Image>
            </div>
            <Image src="/images/forward.svg" alt="forward icon" height={22} width={22}></Image>
            <Image src="/images/skip.svg" alt="skip icon" height={22} width={22}></Image>
            <Image src="/images/shuffle.svg" alt="shuffle icon" height={22} width={22}></Image>
            <Image src="/images/repeat.svg" alt="repeat icon" height={22} width={22}></Image>
            <div className="flex items-center gap-3">
              <span>2:23</span>
              <div className="w-52 h-1 bg-zinc-500 rounded-full"></div>
              <span>4:45</span>
            </div>
            <Image src="/images/volume.svg" alt="volume icon" height={25} width={25}></Image>
          </div>
          <div className="flex">
            <Image src="/images/daftpunkAlbum.svg" alt="daftpunkAlbum icon" height={65} width={65}></Image>
            <div className="flex flex-col p-1">
              <h1>Get Lucky</h1>
              <p className="text-zinc-400">Daft Punk</p>
              <p className="text-zinc-400">Random Access Memories</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Image src="/images/heart.svg" alt="heart icon" height={22} width={22}></Image>
            <Image src="/images/addSong.svg" alt="addSong icon" height={22} width={22}></Image>
            <Image src="/images/lyrics.svg" alt="lyrics icon" height={22} width={22}></Image>
            <Image src="/images/devices.svg" alt="devices icon" height={22} width={22}></Image>
            <Image src="/images/dots.svg" alt="dots icon" height={22} width={22}></Image>
            <div className="h-100 w-[2px] bg-zinc-600 rounded-full"></div>
            <Image src="/images/userIcon.svg" alt="userIcon icon" height={30} width={30}></Image>
            <Image src="/images/queue.svg" alt="queue icon" height={25} width={25}></Image>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Main;