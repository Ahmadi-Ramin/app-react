import "./mailList.css"

const MailList = () => {
  return (
    <div className="w-full mt-12 bg-blue-900 text-white flex flex-col items-center gap-5 p-12">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="flex items-center flex-row gap-2">
        <input className="w-72 h-8 p-2 border-none mr-2 rounded-md" type="text" placeholder="Your Email" />
        <button className="h-12 w-25 bg-blue-700 text-white font-medium border-none rounded-md cursor-pointer">Subscribe</button>
      </div>
    </div>
  )
}

export default MailList