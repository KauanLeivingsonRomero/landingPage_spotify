import Image from 'next/image';
import React from 'react';

const Aside = () => {
  return(
    <>
      <aside className="w-60 h-screen">
        <nav className="flex flex-col ">
          <div className="flex p-5 gap-3 items-center justify-center h-16  mb-2">
            <Image  src="/images/library.svg" alt="library icon" height={25} width={25}></Image>
            <h1 className="flex-1 text-zinc-400 hover:text-zinc-100 transition"><a href="#">My Library</a></h1>
          </div>          
          <div className="flex p-5 gap-3 items-center justify-center h-14 ">
            <Image  src="/images/pin.svg" alt="library icon" height={25} width={25}></Image>
            <h1 className="flex-1 text-zinc-400 hover:text-zinc-100 transition"><a href="#">Pins</a></h1>
            <Image  src="/images/rightArrow.svg" alt="rightArrow icon" height={15} width={15}></Image>
          </div>
          <div className="flex p-5 gap-3 items-center justify-center h-14 ">
            <Image  src="/images/playlist.svg" alt="library icon" height={25} width={25}></Image>
            <h1 className="flex-1 text-zinc-400 hover:text-zinc-100 transition"><a href="#">Playlists</a></h1>
            <Image  src="/images/rightArrow.svg" alt="rightArrow icon" height={15} width={15}></Image>           
          </div>
          <div className="flex p-5 gap-3 items-center justify-center h-14 ">
            <Image  src="/images/heart.svg" alt="library icon" height={25} width={25}></Image>
            <h1 className="flex-1 text-zinc-400 hover:text-zinc-100 transition"><a href="#">Liked songs</a></h1>           
          </div>
          <div className="flex p-5 gap-3 items-center justify-center h-14 ">
            <Image  src="/images/bookmarker.svg" alt="library icon" height={25} width={25}></Image>
            <h1 className="flex-1 text-zinc-400 hover:text-zinc-100 transition"><a href="#">Saves</a></h1>           
          </div>
          <div className="flex p-5 gap-3 items-center justify-center h-14 ">
            <Image  src="/images/disk.svg" alt="library icon" height={25} width={25}></Image>
            <h1 className="flex-1 text-zinc-400 hover:text-zinc-100 transition"><a href="#">Albums</a></h1>           
          </div>
          <div className="flex p-5 gap-3 items-center justify-center h-14 ">
            <Image  src="/images/folder.svg" alt="library icon" height={25} width={25}></Image>
            <h1 className="flex-1 text-zinc-400 hover:text-zinc-100 transition"><a href="#">Folders</a></h1>           
          </div>
          <div className="flex p-5 gap-3 items-center justify-center h-14 ">
            <Image  src="/images/mic.svg" alt="library icon" height={25} width={25}></Image>
            <h1 className="flex-1 text-zinc-400 hover:text-zinc-100 transition"><a href="#">Podcasts</a></h1>           
          </div>
          <div className="flex p-5 gap-3 items-center justify-center h-14 ">
            <Image  src="/images/book.svg" alt="library icon" height={25} width={25}></Image>
            <h1 className="flex-1 text-zinc-400 hover:text-zinc-100 transition"><a href="#">Audiobooks</a></h1>           
          </div>
          <div className="flex p-5 gap-3 items-center justify-center h-14 ">
            <Image  src="/images/artist.svg" alt="library icon" height={25} width={25}></Image>
            <h1 className="flex-1 text-zinc-400 hover:text-zinc-100 transition"><a href="#">Artists</a></h1>           
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Aside;