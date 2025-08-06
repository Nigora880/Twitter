import { CommentIcon, LikeIcon, RepostIcon, StatisticIcon, UploadIcon } from '../assets/icons'

const PostItem = ({item}) => {
  return (
    <div key={item.id} className="flex gap-[15px] p-5 border-b-[1px] border-[#D8D8D8]">
<img className="w-[60px] h-[60px]" src={item.img} alt="avatar img" width={60} height={60}/>
    <div>
      <div className="mb-[5px] flex gap-[2px] items-center">
        <strong className="font-bold text-[20px]">{item.username}</strong>
        <p className="text-[18px] text-[#000000] opacity-[60%]">{item.email}</p>
      </div>
      <p className="mb-[15px] text-[18px]">{item.content}</p>
      {item.postingImg && <img className="w-full rounded-[20px] h-[453px] pb-[22px]" src={item.postingImg} alt="post img"/>}
       <div className="w-[80%] flex justify-between items-center">
        <div className="flex items-center gap-[10px]">
          <CommentIcon/>
        <span>{item.commentCount}</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <RepostIcon/>
        <span>{item.repostCount}</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <LikeIcon/>
        <span>{item.likeCount}</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <UploadIcon/>
        <span>{item.uploadCount}</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <StatisticIcon/>
        <span>{item.statisticCount}</span>
        </div>
       </div>
    </div>
    </div>
  )
}

export default PostItem
