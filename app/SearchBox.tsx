'use client'

function SearchBox() {
  return (
    <form className='max-w-6xl mx-auto flex jsutify-be
    items-center'>
        <input type="text" placeholder='Search Keywords...' className='w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400'/>
        <button type="submit">Search</button>
    </form>
  )
}

export default SearchBox