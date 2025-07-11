
const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
        <h1 className="md:text-4xl text-2xl font-bold">Never Miss a Blog!</h1>
        <p className="md:text-lg text-gray-500/70 pb-8">Subscribe to our newsletter to get the latest news and updates.</p>
        <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12 ">
            <input type="email" className="border-r-0 outline-none  border border-gray-300 rounded-md h-full w-full rounded-r-none px-3 text-gray-500" placeholder="Enter your email" />
            <button type="submit" className="md:px-12 px=8 h-full text-white bg-primary/80 hover:g-primary transition-all cursor-pointer rounded-md rounded-1-none ">Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter