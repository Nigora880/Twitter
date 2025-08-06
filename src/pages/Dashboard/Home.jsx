import { Button, Heading, Input } from "../../components"
import { ChooseImgIcon, CommentIcon, GifIcon, LikeIcon, ModeIcon, RepostIcon, ScheduleIcon, SmileIcon, StatIcon, StatisticIcon, UploadIcon } from "../../assets/icons"
import { Hero, Kebab } from "../../assets/img"
import { useState } from "react"
import { useCookies } from "react-cookie"
import PostItem from "../../components/PostItem"
const Home = () => {
  const [cookies] = useCookies(['token']);
  const [chooseImg, setChooseImg] = useState(null)
  const [postList, setPostList] = useState([
    {
      id:1,
      img:Hero,
      username:"Designsta",
      email:"@inner · 25m",
      content:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount:10,
      repostCount:1,
      likeCount:8,
      uploadCount:0,
      statisticCount:0,
      postingImg:null
    },
    {
      id:2,
      img:Hero,
      username:"cloutexhibition",
      email:"@RajLahoti · 22m",
      content:"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentCount:10,
      repostCount:5,
      likeCount:9,
      uploadCount:0,
      statisticCount:0,
      postingImg:null
    },
    {
      id:3,
      img:Hero,
      username:"CreativePhoto",
      email:"@cloutexhibition · 1h",
      content:"Обетда..... Кечиринглар",
      commentCount:10,
      repostCount:1,
      likeCount:8,
      uploadCount:0,
      statisticCount:0,
      postingImg:Kebab
    }
  ])
  function handleCreatePost(e){
    e.preventDefault()
    const data = {
      id:postList[postList.length - 1].id ? postList[postList.length - 1].id + 1 : 1,
      img:Hero,
      username:cookies.token.email,
      email:cookies.token.email,
      content:e.target.todo.value,
      commentCount:0,
      repostCount:0,
      likeCount:0,
      uploadCount:0,
      statisticCount:0,
      postingImg:chooseImg
    }
    setPostList([data, ...postList])
    setChooseImg(null)
  }
  return (
 <div className="w-full">
  <div className="flex items-center justify-between p-5 border-b-[1px] border-[#D8D8D8]">
 <Heading type={"h2"} title={"Home"}/>
 <ModeIcon/>
  </div>
  <div className="flex relative items-start gap-[15px] p-5 border-b-[1px] border-[#D8D8D8]">
  <img className="w-[60px] h-[60x]" src={Hero} alt="avatar img" width={60} height={60}/>
  <form onSubmit={handleCreatePost} autoComplete="off" className="w-[100%] pb-[28px]">
    <Input classList={'!border-none !p-0 !pt-[11px] !mb-[32px] !font-semibold !text-[22px]'} name={"todo"} placeholder="What’s happening" />
    <div className="flex items-center gap-[22px]">
      <label>
        <ChooseImgIcon/>
        <input onChange={(e) => setChooseImg(URL.createObjectURL(e.target.files[0]))} className="hidden" type="file" />
      </label>
      <button type="button"><GifIcon/></button>
      <button type="button"><StatIcon/></button>
      <button type="button"><ScheduleIcon/></button>
      <button type="button"><SmileIcon/></button>
    </div>
    <Button type={'submit'} classList={"!absolute !bottom-[5px] !right-[18px] !w-[108px] !h-[50px] "}>Tweet</Button>
  </form>
  </div>
  <div>
    {postList.map(item => <PostItem key={item.id} item={item} />)}
  </div>
 </div>

  )
}
export default Home
